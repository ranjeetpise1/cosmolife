import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/login";
import Navbar from "./components/navbar";
import Products from "./components/products";
import Home from "./components/home";
import Signup from "./components/signup";
import Feedback from "./components/feedback";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
   <div className="container">

      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/feedback" element={<Feedback/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
          <Footer/>
   </div>
  );
}

export default App;
