const express = require("express");
const db = require("../../db_files/dbconnection");
const cart_route = express.Router();
const utils = require("./utils");

function logOriginalUrl(req, resp, next) {
  if (req.body.headers["is_cart_created"] === false) {
    const connection = db.openConnection();

    const statement = `insert into cart(user_id) values ('${req.params["user_id"]}')`;

    connection.query(statement, (error, result) => {
      console.log("inside middleware");
      console.log(result);
      console.log(error);
      // req.cart_id = result["insertId"];
      req.body.headers["is_cart_created"] = true;
      next();
    });
  } else {
    console.log("inside middleware else");
    next();
  }
}

const logStuff = [logOriginalUrl];

cart_route.post("/add_to_cart/:user_id/:product_id", logStuff, (req, resp) => {
  const { user_id, product_id } = req.params;
  const { add_quantity } = req.body.body;
  console.log(req.body);
  if (req.body.headers["is_cart_created"] === true) {
    const connection = db.openConnection();
    let statement = `
    select 
    cd.product_id, 
    cd.quantity, 
    cd.no_of_items, 
    cd.total_bill, 
    pd.product_cost from cart_details cd 
    inner join product_details pd 
    on cd.product_id = pd.product_id 
    inner join cart c 
    on cd.cart_id = c.cart_id 
    where cd.product_id = ${product_id} 
    and c.user_id = ${user_id} 
    and c.is_cart_confirmed = false`;
    connection.query(statement, (error, result) => {
      if (!error) {
        if (result.length !== 0) {
          // req.cart_id !== "undefined" &&
          statement = `update cart_details cd inner join cart c on cd.cart_id = c.cart_id set cd.quantity = 
          ${parseInt(result[0].quantity) + parseInt(add_quantity)}, 
          cd.no_of_items = ${
            parseInt(result[0].no_of_items) + parseInt(add_quantity)
          }, 
          cd.total_bill = ${
            parseInt(result[0].total_bill) +
            parseInt(add_quantity) * parseInt(result[0].product_cost)
          } 
          where cd.product_id = ${product_id} and c.user_id = ${user_id} and c.is_cart_confirmed = false`;

          connection.query(statement, (error, result) => {
            connection.end();
            resp.send(utils.create_result(error, result));
          });
        } else {
          statement = `select product_cost from product_details where product_id = '${product_id}'`;
          connection.query(statement, (error, result) => {
            if (!error) {
              statement = `insert into cart_details(cart_id, product_id, quantity, no_of_items, total_bill) values ((select cart_id from cart where is_cart_confirmed = false), '${product_id}', '${add_quantity}', '${add_quantity}', '${
                result[0].product_cost * add_quantity
              }')`;

              connection.query(statement, (error, result) => {
                connection.end();
                resp.send(utils.create_result(error, result));
              });
            } else {
              resp.send("Cart_id is null" + cart_id);
            }
          });
        }
      } else {
        connection.end();
        resp.send(utils.create_error(error));
      }
    });
  } else {
    console.log("after evrything");
    resp.send("there is nothing in cart...");
  }
});

cart_route.post("/remove_from_cart/:user_id/:product_id", (req, resp) => {
  const { user_id, product_id } = req.params;
  const { remove_quantity } = req.body;
  if (req.body.headers["is_cart_created"] === true) {
    const connection = db.openConnection();

    let statement = `
    select cd.product_id, 
    cd.quantity, 
    cd.no_of_items, 
    cd.total_bill, 
    pd.product_cost 
    from cart_details cd inner join product_details pd 
    on cd.product_id = pd.product_id inner join cart c 
    on cd.cart_id = c.cart_id 
    where cd.product_id = ${product_id} 
    and c.user_id = ${user_id} 
    and c.is_cart_confirmed = false`;

    connection.query(statement, (error, result) => {
      if (!error) {
        if (
          result.length !== 0 &&
          parseInt(result[0].quantity) >= parseInt(remove_quantity)
        ) {
          statement = `update cart_details cd inner join cart c on cd.cart_id = c.cart_id set cd.quantity = 
          ${parseInt(result[0].quantity) - parseInt(remove_quantity)}, 
          cd.no_of_items = ${
            parseInt(result[0].no_of_items) - parseInt(remove_quantity)
          }, 
          cd.total_bill = ${
            parseInt(result[0].total_bill) -
            parseInt(remove_quantity) * parseInt(result[0].product_cost)
          } 
          where cd.product_id = ${product_id} and c.user_id = ${user_id} and c.is_cart_confirmed = false`;

          connection.query(statement, (error, result) => {
            if (!error) {
              statement = `delete from cart_details where quantity = 0`;
              connection.query(statement, (error, result) => {
                connection.end();
                resp.send(utils.create_result(error, result));
              });
            } else {
              resp.send(utils.create_error(error));
            }
          });
        } else {
          resp.send(utils.create_result(error, result));
        }
      }
    });
  } else {
    resp.send("Cart is empty!!");
  }
});

cart_route.get("/get_cart_details/:user_id", (req, resp) => {
  const { user_id } = req.params;
  const connection = db.openConnection();

  let statement = `
    select cd.product_id, 
    cd.quantity,
    cd.no_of_items,
    cd.total_bill,
    pd.product_name,
    pd.product_cost,
    pd.product_description,
    pd.product_image
    from cart_details cd inner join product_details pd 
    on cd.product_id = pd.product_id inner join cart c 
    on cd.cart_id = c.cart_id 
    where c.user_id = ${user_id} 
    and c.is_cart_confirmed = false`;

  connection.query(statement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

module.exports = cart_route;
