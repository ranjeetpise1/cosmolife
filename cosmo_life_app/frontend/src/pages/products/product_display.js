import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Unstable_NumberInput as BaseNumberInput } from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { toast } from "react-toastify";
import axios from "axios";
import { config } from "../../config";
import { isCartCreated } from "../../utils";

export default function ProductDisplay() {
  const [data, setData] = useState();
  const [value, setValue] = useState(0);
  const { state } = useLocation();
  const { props } = state;
  const navigate = useNavigate();

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

  const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
    return (
      <BaseNumberInput
        slots={{
          root: StyledInputRoot,
          input: StyledInput,
          incrementButton: StyledButton,
          decrementButton: StyledButton,
        }}
        slotProps={{
          incrementButton: {
            children: <AddIcon fontSize="small" />,
            className: "increment",
          },
          decrementButton: {
            children: <RemoveIcon fontSize="small" />,
          },
        }}
        {...props}
        ref={ref}
      />
    );
  });

  function handleAddToCart(props) {
    console.log(value);
    console.log(props);
    if (value === 0 || value === undefined) {
      toast.warning("Please select quantity");
    } else {
      const body = {
        add_quantity: parseInt(value),
      };
      axios
        .post(
          config.CART_ADD_TO_CART.replace(
            ":user_id",
            sessionStorage.getItem("user_id")
          ).replace(":product_id", props.body.product_id),
          {
            headers: {
              "Content-Type": "application/json",
              is_cart_created: isCartCreated(),
            },
            body,
          }
        )
        .then((response) => {
          // get the server result
          const result = response.data;
          if (result["status"] === "success") {
            toast.success("Product is added to the cart...");
            if (!isCartCreated()) {
              sessionStorage["isCartCreated"] = 1;
            }
            navigate(-1);
          } else {
            console.log(result);
            toast.error("error while adding product in cart try again..");
          }
        });
    }
  }
  return (
    <div>
      <div
        className="row"
        style={{
          border: "2px solid black",
          margin: "100px 20px 50px 20px",
          padding: "20px",
        }}
      >
        <div>
          <marquee
            onmouseover="this.stop();"
            onmouseout="this.start();"
            scrollamount="5"
          >
            <p class="announcement-bar__message h5">
              ***Free Shipping on orders above Rs 599 . Upto 50% off sitewide .
              COD available***
            </p>
          </marquee>
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <CardMedia
            component="img"
            style={{ marginTop: "30px" }}
            alt="green iguana"
            image="https://m.media-amazon.com/images/I/713ZowDqwEL._SL1500_.jpg"
          />
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h1 style={styles.heading2}>
                <b>{props.body.product_name}</b>
              </h1>
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={styles.heading3}
            >
              <CurrencyRupeeIcon fontSize="large" />
              {props.body.product_cost}
            </Typography>
            <Rating
              name="size-large"
              defaultValue={((Math.random() + 2) * props.body.product_id) % 6}
              size="large"
              readOnly
            />
            <CardActions>
              <NumberInput
                defaultValue={0}
                value={value}
                onChange={(event, val) => setValue(val)}
              />
            </CardActions>
            <CardActions>
              <Button
                variant="outlined"
                size="small"
                startIcon={<ShoppingCartIcon />}
                onClick={() => handleAddToCart(props)}
              >
                Buy Now
              </Button>
              <Button
                color="secondary"
                variant="outlined"
                size="small"
                startIcon={<FavoriteIcon />}
              >
                Add to Favourite
              </Button>
            </CardActions>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h3>
                <i>Descriptions :</i>
              </h3>
              <p>{props.body.product_description}</p>
            </Typography>
          </CardContent>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

const blue = {
  100: "#daecff",
  200: "#b6daff",
  300: "#66b2ff",
  400: "#3399ff",
  500: "#007fff",
  600: "#0072e5",
  700: "#0059B2",
  800: "#004c99",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const StyledInputRoot = styled("div")(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[500]};
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  `
);

const StyledInput = styled("input")(
  ({ theme }) => `
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.375;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 4px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
    };
    border-radius: 8px;
    margin: 0 8px;
    padding: 10px 12px;
    outline: 0;
    min-width: 0;
    width: 4rem;
    text-align: center;
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[700] : blue[200]
      };
    }
  
    &:focus-visible {
      outline: 0;
    }
  `
);

const StyledButton = styled("button")(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    line-height: 1.5;
    border: 1px solid;
    border-radius: 999px;
    border-color: ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    width: 32px;
    height: 32px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      cursor: pointer;
      background: ${theme.palette.mode === "dark" ? blue[700] : blue[500]};
      border-color: ${theme.palette.mode === "dark" ? blue[500] : blue[400]};
      color: ${grey[50]};
    }
  
    &:focus-visible {
      outline: 0;
    }
  
    &.increment {
      order: 1;
    }
  `
);
