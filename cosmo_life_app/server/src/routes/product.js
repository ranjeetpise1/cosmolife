const express = require("express");
const db = require("../../dbconnection");
const utils = require("./utils");
const product_route = express.Router();

product_route.get("/get_products/:category_id", (req, resp, next) => {
  const category_id = req.params.category_id;
  const connection = db.openConnection();

  const statement = `select * from product_details where category_id = ${category_id}`;

  connection.query(statement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

product_route.post("/add_products/:category_id", (req, resp, next) => {
  const { product_name, product_description, product_cost } = req.body;
  const connection = db.openConnection();

  const statement = `insert into product_details(product_name, product_description, product_cost, category_id) values ('${product_name}', '${product_description}', ${product_cost}, '${category_id}')`;

  connection.query(statement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

product_route.delete("/delete_products/:product_id", (req, resp, next) => {
  const { product_id } = req.params;
  const connection = db.openConnection();

  const statement = `delete from product_details where product_id = ${product_id}`;

  connection.query(statement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

product_route.put("/update_products/:product_id", (req, resp, next) => {
  const { product_id } = req.params;
  const { product_name, product_description, product_cost } = req.body;
  const connection = db.openConnection();

  const statement = `update product_details set product_name='${product_name}', product_description='${product_description}', product_cost=${product_cost} where product_id = ${product_id}`;

  connection.query(statement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

module.exports = product_route;
