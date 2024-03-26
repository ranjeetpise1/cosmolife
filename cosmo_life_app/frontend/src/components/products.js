import react from "react";
import Navbar from "./navbar";
import Home from "./home";
import Card from "./card";
import Footer from "./footer";

function Products() {
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
      {
          name: "moon cream",
          description: "to serve body care from UV/moon rays",
      }, {
        name: "sun cream",
        description: "to serve body care from UV/sun rays",
      },
      {
        name: "moon cream",
        description: "to serve body care from UV/moon rays",
      },
      
  ];

  function show_cards(element) {
    return (
        <Card body={element} />
    )
  }

  const cards = products.map(show_cards)

  return (
  <div class="row">
    {cards}
    </div>
  );
}

export default Products;
