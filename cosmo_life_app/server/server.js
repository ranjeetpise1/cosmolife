const express = require("express");
const app = express();
const cors = require("cors");
const product_route = require("./src/routes/product");
const reg_router = require("./src/routes/registration");
const utils = require("./src/routes/utils");
const cart_route = require("./src/routes/cart");
const brand_route = require("./src/routes/brand");
const category_route = require("./src/routes/category");
const address_route = require("./src/routes/address");
require("dotenv").config();

let port = process.env.PORT;

app.use(express.json());
app.use(cors("*"));

app.use("/products", product_route);
app.use("/registration", reg_router);
app.use("/cart_service", cart_route);
app.use("/address_service", address_route);
app.use("/brand_service", brand_route);
app.use("/category_service", category_route);

// This is for testing purpose
app.post("/", (req, resp) => {
  const { name } = req.body;
  resp.status(200);
  resp.send(utils.decrypt(name));
});

app.get("/", (req, resp) => {
  const { name } = req.body;
  resp.status(200);
  resp.send(utils.encrypt(name));
});

app.listen(port, "0.0.0.0", (error) => {
  if (!error) {
    console.log(
      "Dude!!, just take your beer and chill, Server is running on port :: " +
        port
    );
  } else {
    console.log("Fail to start server on port :: " + port);
  }
});
