const express = require("express");
const db = require("../../dbconnection");
const cart_route = express.Router();

cart_route.param((req, resp, next) => {});

cart_route.get("/add_to_cart", (req, resp, next) => {
  const connection = db.openConnection();
});
