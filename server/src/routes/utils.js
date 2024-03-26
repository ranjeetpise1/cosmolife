const cryptoJS = require("crypto-js");
require("dotenv").config();

const secret = process.env.SECRET;

function create_success(data) {
  return {
    status: "success",
    data,
  };
}

function create_error(data) {
  return {
    status: "failure",
    data,
  };
}

function create_result(error, data) {
  return error ? create_error(error) : create_success(data);
}

function encrypt(password) {
  console.log(
    "inside encrypt with password :: " + password + " and secret :: " + secret
  );
  return cryptoJS.AES.encrypt(password, secret).toString();
}

function decrypt(encryption) {
  console.log("inside decrypt");
  let bytes = cryptoJS.AES.decrypt(encryption, secret);
  let originalText = bytes.toString(cryptoJS.enc.Utf8);

  return originalText;
}

module.exports = {
  create_error,
  create_success,
  create_result,
  encrypt,
  decrypt,
};
