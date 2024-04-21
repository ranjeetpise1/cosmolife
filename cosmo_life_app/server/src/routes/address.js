const express = require("express");
const address_router = express.Router();
const db = require("../../db_files/dbconnection");
const utils = require("./utils");

address_router.get("usr_get_addr/:user_id", (req, resp) => {
  const user_id = req.params.user_id;

  const connection = db.openConnection();

  const starement = `select * from user_address where user_id = ${user_id}`;

  connection.query(starement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

address_router.post("usr_add_addr/:user_id", (req, resp) => {
  const {
    country,
    state,
    district,
    city,
    area,
    house_no,
    postal_code,
    status,
  } = req.body;
  const user_id = req.params.user_id;

  const connection = db.openConnection();

  const starement = `insert into user_address(country, state, district, city, area, house_no, postal_code, user_id, status) values (${country}, ${state}, ${district}, ${city}, ${area}, ${house_no}, ${postal_code}, ${user_id}, ${status})`;

  connection.query(starement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

address_router.put("usr_update_addr/:user_id", (req, resp) => {
  const {
    country,
    state,
    district,
    city,
    area,
    house_no,
    postal_code,
    status,
  } = req.body;
  const user_id = req.params.user_id;

  const connection = db.openConnection();

  const starement = `update user_address set country = ${country}, state = ${state}, district = ${district}, city = ${city}, area = ${area}, house_no = ${house_no}, postal_code = ${postal_code}, user_id = ${user_id}, status = ${status}) where user_id = ${user_id}`;

  connection.query(starement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

address_router.delete("usr_delete_addr/:user_id", (req, resp) => {
  const {
    country,
    state,
    district,
    city,
    area,
    house_no,
    postal_code,
    status,
  } = req.body;
  const user_id = req.params.user_id;

  const connection = db.openConnection();

  const starement = `delete from user_address where user_id = ${user_id}`;

  connection.query(starement, (error, result) => {
    connection.end();
    resp.send(utils.create_result(error, result));
  });
});

module.exports = address_router;
