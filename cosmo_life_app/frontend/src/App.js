import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/signin/login";
import Navbar from "./components/navbar/navbar";
import Products from "./pages/products/products";
import Home from "./pages/home/home";
import Signup from "./pages/signup/signup";
import Feedback from "./pages/feedback/feedback";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Address from "./pages/address/address";
import Category from "./pages/category/category";
import Cart from "./pages/cart/cart";
import ProductDisplay from "./pages/products/product_display";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/display_page/" element={<ProductDisplay />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<Address />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
