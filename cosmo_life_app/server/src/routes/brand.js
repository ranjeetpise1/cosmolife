const express = require("express");
const brand_router = express.Router();
const db = require("../../db_files/dbconnection");
const utils = require("./utils");

brand_router.get("/brands", (req, resp) => {
  const connection = db.openConnection();

  const statement = `select * from brand_details`;

  connection.query(statement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

brand_router.post("/add_brand", (req, resp) => {
  const { brand_name, brand_description } = req.body;
  const connection = db.openConnection();

  const statement = `insert into brand_details( brand_name, brand_description ) values ('${brand_name}', '${brand_description}')`;

  connection.query(statement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

brand_router.put("/update_brand/:brand_id", (req, resp) => {
  const { brand_name, brand_description } = req.body;
  const brand_id = req.params.brand_id;
  const connection = db.openConnection();

  const statement = `update brand_details set brand_name = '${brand_name}', brand_description = '${brand_description}' where brand_id = ${brand_id}`;

  connection.query(statement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

brand_router.delete("/delete_brand/:brand_id", (req, resp) => {
  const brand_id = req.params.brand_id;
  const connection = db.openConnection();

  const statement = `delete from brand_details where brand_id = ${brand_id}`;

  connection.query(statement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

module.exports = brand_router;
