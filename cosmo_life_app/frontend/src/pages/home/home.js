import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import BackDropButton from "../../components/buttons/backdrop";
import BrandCard from "../../components/card/brand_card";
import { config } from "../../config";
import { toast } from "react-toastify";
import axios from "axios";
import BackToTop from "../../components/buttons/scroll_up";
import { isUserLoggedIn } from "../../utils";

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
    textShadow: "5px 5px 10px #27097A",
    color: "white",
    Backdrop: "0.9",
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
  const [data, setData] = useState([]);

  useEffect((e) => {
    if (isUserLoggedIn()) {
      navigate("/");
    } else {
      loadBranddetails();
    }
  }, []);

  const loadBranddetails = () => {
    axios.get(config.BRAND_GET).then((response) => {
      // get the server result
      const result = response.data;
      if (result["status"] === "success") {
        setData(result.data);
      } else {
        toast.error("error while fetching brands");
      }
    });
  };

  function show_cards(element) {
    return <BrandCard body={element} />;
  }

  const cards = data.map(show_cards);

  return (
    <div>
      <BackToTop />
      <div className="row">
        <div className="col-12">
          <Card
            sx={{
              display: "flex",
              color: "#27097A",
              backgroundImage: `url('https://yakymour.files.wordpress.com/2015/11/christiaan-dior-blush-state-of-gold-look-noel-2015-gif.gif')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              transition: "0.2s",
              padding: "180px",
            }}
          >
            <Typography component="div" variant="h5">
              <h1 style={styles.heading2}>Home Page</h1>
            </Typography>
          </Card>
        </div>
      </div>
      <div style={{ margin: "25px" }} />
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
