const express = require("express");
const category_router = express.Router();
const db = require("../../db_files/dbconnection");
const utils = require("./utils");

category_router.get("/categories/:brand_id", (req, resp) => {
  const brand_id = req.params.brand_id;
  const connection = db.openConnection();

  const statement = `select * from category_details where brand_id = ${brand_id}`;

  connection.query(statement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

category_router.post("/add_category/:brand_id", (req, resp) => {
  const { category_name, category_description } = req.body;
  const brand_id = req.params.brand_id;
  const connection = db.openConnection();

  const statement = `insert into category_details( category_name, category_description, brand_id ) values ('${category_name}', '${category_description}', ${brand_id})`;

  connection.query(statement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

category_router.put("/update_category/:category_id", (req, resp) => {
  const { category_name, category_description } = req.body;
  const category_id = req.params.category_id;
  const connection = db.openConnection();

  const statement = `update category_details set category_name = '${category_name}', category_description = '${category_description}' where category_id = ${category_id}`;

  connection.query(statement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

category_router.delete("/delete_category/:category_id", (req, resp) => {
  const category_id = req.params.category_id;
  const connection = db.openConnection();

  const statement = `delete from category_details where category_id = ${category_id}`;

  connection.query(statement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

module.exports = category_router;
