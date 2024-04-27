import React from "react";
import CardMaterial from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import { useNavigate } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Rating from "@mui/material/Rating";

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
    fontSize: "1em",
    Display: "flex",
    fontWidth: "100%",
    fontWeight: "bolder",
    textShadow: "5px 5px 10px gray",
    color: "black",
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

/* 
0
: 
no_of_items
: 
5
product_cost
: 
450
product_description
: 
"A fresh breath to start the day is the best way to go! Aren't we right?Our fast-action eMIST mouth freshener spray is a unique blend of traditional Indian medicines and modern pharma technology that safeguards your oral hygiene. It helps in keeping your teeth and gums strong and eliminates bad breath to help you go about your day with full confidence! This mouth freshener spray is a potent blend of natural ingredients like clove, ginger, fennel, cinnamon & turmeric (Curcumin) in a refreshing camphor-menthol flavour."
product_id
: 
1
product_image
: 
"no-image"
product_name
: 
"eMIST Mouth Freshener Spray"
quantity
: 
5
total_bill
: 
2250 */
export default function CartCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardMaterial className="row">
      <div className="col-1"></div>
      <div
        className="col-4"
        style={{
          padding: "10px",
          margin: "10px",
        }}
      >
        <CardMedia
          sx={{ height: 200, borderRadius: "20px" }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnb43MuKReMIG9fvcHJrOAupaJjzKCcEdyw&usqp=CAU"
          title={props.body.product_name}
        />
      </div>
      <div className="col-4">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h1 style={styles.heading2}>
              <b>
                {props.body.product_name}
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </b>
            </h1>
          </Typography>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <CurrencyRupeeIcon />
              {props.body.product_cost}
            </Typography>
            <Rating
              name="size-large"
              defaultValue={((Math.random() + 2) * props.body.product_id) % 6}
              size="large"
              readOnly
            />
          </CardContent>
          <Typography
            className="col-sm-4"
            style={{
              border: "1px solid black",
              padding: "10px",
              borderRadius: "10px 0 10px 0",
            }}
          >
            Quantity : {props.body.quantity}
          </Typography>
          <CardActions>
            <Button size="large">Add</Button>
            <Button size="small">Remove</Button>
          </CardActions>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{props.body.product_description}</Typography>
          </CardContent>
        </Collapse>
      </div>
      <div className="col-1"></div>
    </CardMaterial>
  );
}
