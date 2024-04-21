import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Card, CardActionArea } from "@mui/material";
import BackDropButton from "../../components/buttons/backdrop";
import { config } from "../../config";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import CategoryCard from "../../components/card/category_card";

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
    fontSize: "4em",
    Display: "flex",
    fontWidth: "100%",
    fontWeight: "bolder",
    textShadow: "5px 5px 10px grey",
    color: "white",
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

export function Category() {
  const { state } = useLocation();
  const { brand_id } = state;

  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect((e) => {
    loadCategoryDetails();
  }, []);

  const loadCategoryDetails = () => {
    axios
      .get(config.CATEGORY_GET.replace(":brand_id", brand_id))
      .then((response) => {
        // get the server result
        const result = response.data;
        if (result["status"] === "success") {
          console.log(result.data);
          setData(result.data);
        } else {
          toast.error("error while fetching brands");
        }
      });
  };

  function show_cards(element) {
    return <CategoryCard body={element} />;
  }

  const cards = data.map(show_cards);

  return (
    <div>
      <div className="row">
        <div className="col-11" style={{ margin: "25px" }}>
          <Card
            sx={{
              display: "flex",
              color: "#27097A",
              backgroundImage: `url('https://www.narscosmetics.com/on/demandware.static/-/Library-Sites-NARS-Shared-Library/default/dwec2e27d5/images/career/Careers.gif')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "65vw 60vh",
              transition: "0.9",
              padding: "100px",
            }}
          >
            <Typography component="div" variant="h5">
              <h1 style={styles.heading2}>Category Page</h1>
            </Typography>
          </Card>
        </div>
      </div>
      <div></div>
      {/* <BackDropButton /> */}
      <div className="row">{cards}</div>
    </div>
  );
}

export default Category;
