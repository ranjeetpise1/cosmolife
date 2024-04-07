import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import MediaCard from "../../components/card/media_card";
import BackDropButton from "../../components/buttons/backdrop";

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

function Home() {
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (sessionStorage.getItem("loginStatus") != 1) {
  //       navigate("/signin");
  //     }
  //   }, []);
  const products = [
    {
      name: "sun cream",
      description: "to serve body care from UV/sun rays",
    },
    {
      name: "moon cream",
      description: "to serve body care from UV/moon rays",
    },
    {
      name: "moon cream",
      description: "to serve body care from UV/moon rays",
    },
    {
      name: "sun cream",
      description: "to serve body care from UV/sun rays",
    },
    {
      name: "moon cream",
      description: "to serve body care from UV/moon rays",
    },
    {
      name: "moon cream",
      description: "to serve body care from UV/moon rays",
    },
    {
      name: "sun cream",
      description: "to serve body care from UV/sun rays",
    },
    {
      name: "moon cream",
      description: "to serve body care from UV/moon rays",
    },
    {
      name: "moon cream",
      description: "to serve body care from UV/moon rays",
    },
    {
      name: "sun cream",
      description: "to serve body care from UV/sun rays",
    },
    {
      name: "moon cream",
      description: "to serve body care from UV/moon rays",
    },
    {
      name: "moon cream",
      description: "to serve body care from UV/moon rays",
    },
    {
      name: "sun cream",
      description: "to serve body care from UV/sun rays",
    },
    {
      name: "moon cream",
      description: "to serve body care from UV/moon rays",
    },
    {
      name: "moon cream",
      description: "to serve body care from UV/moon rays",
    },
    {
      name: "sun cream",
      description: "to serve body care from UV/sun rays",
    },
    {
      name: "moon cream",
      description: "to serve body care from UV/moon rays",
    },
  ];

  function show_cards(element) {
    return <MediaCard body={element} />;
  }

  const cards = products.map(show_cards);

  return (
    <div>
      <div className="row">
        <div className="col-11" style={{ margin: "25px" }}>
          <Card sx={{ display: "flex" }}>
            <CardActionArea>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent>
                  <Typography component="div" variant="h5">
                    <h1 style={styles.heading2}>Customer Home Page</h1>
                  </Typography>
                </CardContent>
              </Box>
            </CardActionArea>
          </Card>
        </div>
      </div>
      <BackDropButton />
      <div className="row">{cards}</div>
      <div>
        <Card>
          <h1
            style={{
              fontFamily: "Dancing Script",
              fontSize: "3em",
              Display: "flex",
              fontWidth: "100%",
              fontWeight: "bolder",
              textShadow: "10px 10px 8px gray",
              color: "black",
              textAlign: "center",
              border: "3px solid black",
              padding: "2%",
              margin: "3% 10% 0 10%",
            }}
            id="title"
          >
            OUR GEAND CLIENTS
          </h1>
          <br />
        </Card>
      </div>
    </div>
  );
}

export default Home;
