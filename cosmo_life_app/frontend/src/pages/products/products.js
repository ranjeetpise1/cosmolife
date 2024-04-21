import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import CardMaterial from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { config } from "../../config";
import { toast } from "react-toastify";
import axios from "axios";
import ProductCard from "../../components/card/product_card";
import { Button } from "react-bootstrap";

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
    fontSize: "3em",
    Display: "flex",
    fontWidth: "100%",
    fontWeight: "bolder",
    textShadow: "5px 5px 10px gray",
    color: "black",
  },
  heading3: {
    fontFamily: "Dancing Script",
    textAlign: "center",
    fontSize: "3em",
    Display: "flex",
    fontWidth: "100%",
    fontWeight: "bolder",
    textShadow: "5px 5px 10px gray",
    color: "black",
  },
};

function Products() {
  const [data, setData] = useState([]);
  const { state } = useLocation();
  const cards = data.map(show_cards);

  const loadBranddetails = () => {
    if (state !== null) {
      const { category_id } = state;
      axios
        .get(config.PROD_GET_PRODUCTS.replace(":category_id", category_id))
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
    } else {
      axios.get(config.PROD_GET_ALL_PRODUCTS).then((response) => {
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
  };

  useEffect((e) => {
    loadBranddetails();
    // setInterval(function () {
    //   var heading1 = document.getElementById("heading1");
    //   if (heading1.innerHTML === "COSMOLIFE is the only solution") {
    //     heading1.innerHTML = "are you in trouble to find cosmetics?";
    //   } else {
    //     heading1.innerHTML = "COSMOLIFE is the only solution";
    //   }
    // }, 3000);
  }, []);

  function show_cards(element) {
    return <ProductCard body={element} />;
  }

  return (
    <div className="row">
      <div className="col-11" style={{ margin: "25px" }}>
        <CardMaterial sx={{ display: "flex" }}>
          <CardActionArea>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <Typography component="div" variant="h5">
                  <h1 style={styles.heading2} id="heading1">
                    Cosmolife Products
                  </h1>
                </Typography>
              </CardContent>
            </Box>
          </CardActionArea>
        </CardMaterial>
      </div>
      {cards}
      <div>
        <CardActions>
          <Button size="large">Go to Cart</Button>
        </CardActions>
      </div>
    </div>
  );
}

export default Products;
