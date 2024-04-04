const express = require("express");
const app = express();
const cors = require("cors");
const product_route = require("./src/routes/product");
const reg_router = require("./src/routes/registration");
const utils = require("./src/routes/utils");
const cart_route = require("./src/routes/cart");

app.use(express.json());
app.use(cors("*"));

app.use("/products", product_route);
app.use("/registration", reg_router);
app.use("/cart_service", cart_route);

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

app.listen(4000, "0.0.0.0", (error) => {
  if (!error) {
    console.log("Server running on port 4000");
  } else {
    console.log("Fail to start server on port 4000");
  }
});
