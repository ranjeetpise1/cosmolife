import Card from "../../components/card/card";
import CardMaterial from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
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

function Products() {
  setInterval(function () {
    var heading1 = document.getElementById("heading1");
    if (heading1.innerHTML === "COSMOLIFE is the only solution") {
      heading1.innerHTML = "are you in trouble to find cosmetics?";
    } else {
      heading1.innerHTML = "COSMOLIFE is the only solution";
    }
  }, 3000);

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
    return <Card body={element} />;
  }

  const cards = products.map(show_cards);

  return (
    <div className="row">
      <div className="col-11" style={{ margin: "25px" }}>
        <CardMaterial sx={{ display: "flex" }}>
          <CardActionArea>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <Typography component="div" variant="h5">
                  <h1 style={styles.heading2} id="heading1"></h1>
                </Typography>
              </CardContent>
            </Box>
          </CardActionArea>
        </CardMaterial>
      </div>

      {cards}
    </div>
  );
}

export default Products;
