import CardMaterial from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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

const Card = (props) => {
  return (
    <div className="col-sm-4">
      <CardMaterial className="col-4">
        <CardActionArea>
          <CardMedia
            sx={{ height: 140 }}
            image="https://i.gifer.com/origin/98/98f463c4f765ed24d38b3640049f4f99_w200.gif"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Special title treatment
            </Typography>
            <Typography variant="body2" color="text.secondary">
              With supporting text below as a natural lead-in to additional
              content.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Add to Cart</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </CardMaterial>
    </div>
  );
};

export default Card;
