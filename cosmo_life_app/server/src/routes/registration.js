const express = require("express");
const reg_router = express.Router();
const db = require("../../db_files/dbconnection");
const utils = require("./utils");
const nodemailer = require("nodemailer");
require("dotenv").config();

/** OTP generator */
function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

reg_router.post("/signup", (req, resp, next) => {
  const { first_name, last_name, email, password, mobile_no, user_role } =
    req.body;
  console.log(req.body);
  const crypto_password = utils.encrypt(password);
  console.log(crypto_password);
  const connection = db.openConnection();

  const statement = `insert into user_details(first_name, last_name, email, password, mobile_no, user_role ) values ('${first_name}', '${last_name}', '${email}', '${crypto_password}', '${mobile_no}', '${user_role}')`;

  connection.query(statement, (error, result) => {
    if (!error) {
      console.log(result);
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: `${email}`,
        subject: "Successfully Signed up to Cosmolife e-commerce services",
        text: `hello ${first_name},
            You have successfully Signed uyp to our application.
            Here you have beautiful experienced user friendly UI to work with. 
            Just enjoy the servises which you want,
            have a nice day..!`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
        } else {
          console.log(info.envelope);
          console.log(info.messageId);
        }
      });

      connection.end();
      resp.send(utils.create_result(error, result));
    } else {
      connection.end();
      console.log(error);
      resp.send(utils.create_error(error));
    }
  });
});

reg_router.post("/signin", (req, resp) => {
  const { email, password } = req.body;
  const connection = db.openConnection();
  const OTP = between(1000, 9999);
  const statement = `select * from user_details where email = '${email}'`;

  connection.query(statement, (error, result) => {
    if (error) {
      connection.end();
      resp.send(utils.create_result(error, result));
    } else {
      if (password === utils.decrypt(result[0].password)) {
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: `${email}`,
          subject: "Successfully Signed in to Cosmolife e-commerce services",
          text: `hello ${result[0].first_name},
                You have successfully Signed in to our application.
                Here you have beautiful experienced user friendly UI to work with. 
                Just enjoy the servises which you want,
                have a nice day..!,

                (Note : Please use below credentials e.g. OTP at the time of sign in to get access to the application)
                <b>OTP</b> : <a>${OTP}</a>`,
        };

        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.error(err);
          } else {
            console.log(info.envelope);
            console.log(info.messageId);
          }
        });
        const data = {
          result: result[0],
          OTP,
        };
        resp.send(utils.create_result(error, data));
      } else {
        resp.status(400);
        resp.send("please check password again, something is wrong!");
      }
    }
  });
});

module.exports = reg_router;
