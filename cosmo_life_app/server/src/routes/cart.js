const express = require("express");
const db = require("../../dbconnection");
const cart_route = express.Router();
const utils = require("./utils");

function logOriginalUrl(req, resp, next) {
  if (req.headers["is_cart_created"] === "false") {
    const connection = db.openConnection();

    const statement = `insert into cart(user_id) values ('${req.params["user_id"]}')`;

    connection.query(statement, (error, result) => {
      console.log("inside middleware");
      req.cart_id = result["insertId"];
      req.headers["is_cart_created"] = "true";
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
  const { add_quantity, cart_id } = req.body;
  if (req.headers.is_cart_created === "true") {
    const connection = db.openConnection();
    let statement = `select cd.product_id, cd.quantity, cd.no_of_items, cd.total_bill, pd.product_cost from cart_details cd inner join product_details pd on cd.product_id = pd.product_id inner join cart c on cd.cart_id = c.cart_id where cd.product_id = ${product_id} and c.user_id = ${user_id} and c.is_cart_confirmed = false`;
    connection.query(statement, (error, result) => {
      if (!error) {
        if (req.cart_id !== "undefined" && result.length !== 0) {
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
            if (!error && cart_id !== "undefined") {
              statement = `insert into cart_details(cart_id, product_id, quantity, no_of_items, total_bill) values ('${cart_id}', '${product_id}', '${add_quantity}', '${add_quantity}', '${
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
    resp.send("cart_id is undefined");
  }
});

cart_route.post("/remove_from_cart/:user_id/:product_id", (req, resp) => {
  const { user_id, product_id } = req.params;
  const { remove_quantity } = req.body;
  if (req.headers.is_cart_created === "true") {
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
              statement = `delete from cart_details where no_of_items = 0`;
              connection.query(statement, (error, result) => {
                connection.end();
                resp.send(utils.create_result(error, result));
              });
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

cart_route.post("/remove_from_cart/:user_id/:product_id", (req, resp) => {
  const { user_id, product_id } = req.params;
  const { remove_quantity } = req.body;
  if (req.headers.is_cart_created === "true") {
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
  } else {
    resp.send("Cart is empty!!");
  }
});

module.exports = cart_route;
