import axios from "axios";
import React, { useEffect, useState } from "react";
import { config } from "../../config";
import { toast } from "react-toastify";
import CartCard from "../../components/card/cart_card";
import { Card, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const styles = {
  heading1: {
    fontFamily: "Dancing Script",
    fontSize: "3em",
    Display: "flex",
    fontWidth: "100%",
    fontWeight: "bolder",
    textShadow: "5px 10px 10px black",
    color: "white",
  },
  heading2: {
    fontFamily: "Dancing Script",
    fontSize: "2em",
    Display: "flex",
    fontWidth: "100%",
    fontWeight: "bolder",
    textShadow: "5px 5px 10px gray",
    color: "grey",
  },
  heading3: {
    fontFamily: "Dancing Script",
    fontSize: "3em",
    Display: "flex",
    fontWidth: "100%",
    fontWeight: "bolder",
    textShadow: "5px 5px 10px gray",
    color: "black",
  },
};

export default function Cart() {
  const [data, setData] = useState([]);
  const cards = data.map(show_cards);
  const navigate = useNavigate();

  function getTotalBill() {
    let price = 0;
    data.forEach((element) => {
      price = price + element.quantity * element.product_cost;
    });
    return price;
  }

  function show_cards(element) {
    return <CartCard body={element} />;
  }

  function getCartDetails() {
    axios
      .get(
        config.CART_GET_CART_DETAILS.replace(
          ":user_id",
          sessionStorage.getItem("user_id")
        )
      )
      .then((response) => {
        // get the server result
        const result = response.data;
        if (result["status"] === "success") {
          console.log(result);
          setData(result.data);
        } else {
          toast.error("error while fetching brands");
        }
      });
  }

  useEffect(() => {
    if (sessionStorage.getItem("loginStatus") !== "1") {
      navigate("/");
    }
    getCartDetails();
  }, []);

  return (
    <div>
      {Heading("CART DETAILS")}
      <div className="row">
        <div className="col-sm-1"></div>
        <div
          className="col-sm-4"
          style={{
            border: "2px solid black",
            borderRadius: "15px 0 15px 0",
            textAlign: "center",
            margin: "20px",
            padding: "5px",
          }}
        >
          <h1 style={styles.heading2}>Number of Items : {cards.length}</h1>
        </div>
        <div className="col-sm-1"></div>
        <div
          className="col-sm-4"
          style={{
            border: "2px solid black",
            borderRadius: "15px 0 15px 0",
            textAlign: "center",
            margin: "20px",
            padding: "5px",
          }}
        >
          <h1 style={styles.heading2}>Total bill : {getTotalBill()}</h1>
        </div>
        <div className="col-sm-2"></div>
      </div>
      {cards}
    </div>
  );
}

function Heading(props) {
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          color: "#27097A",
          backgroundImage: `url('https://libg.s3.us-east-2.amazonaws.com/download/Nebula-13.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          transition: "0.2s",
          padding: "60px",
        }}
      >
        <Typography component="div" variant="h5">
          <h1 style={styles.heading1}>{props}</h1>
        </Typography>
      </Card>
    </div>
  );
}
