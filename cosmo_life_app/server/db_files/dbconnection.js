const mysql = require("mysql");
const mysql2 = require("mysql2-promise");
require("dotenv").config();

const openConnection = () => {
  const connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  });

  connection.connect();

  return connection;
};

const openConnection2 = async () => {
  const connection = await mysql2.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  });

  return connection;
};

module.exports = {
  openConnection,
  openConnection2,
};
