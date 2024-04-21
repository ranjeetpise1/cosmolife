import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Rating from "@mui/material/Rating";
import { CardHeader } from "react-bootstrap";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  /* props => product_id, category_id, product_name, product_description, product_image, product_cost, created_time_stamp, last_updated_time_stamp */
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 370 }}>
      <CardHeader>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.body.product_name}
          </Typography>
        </CardContent>
      </CardHeader>
      <CardActionArea
        onClick={(e) =>
          navigate("/product/display_page/", { state: { props: props } })
        }
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
      </CardActionArea>
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
        <CardActions>
          <Button size="large">Buy Now</Button>
          <Button size="small">Add to Favourite</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
