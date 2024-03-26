import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/login";
import Navbar from "./components/navbar";
import Products from "./components/products";
import Home from "./components/home";
import Signup from "./components/signup";
import Footer from "./components/footer";

function App() {
  return (
   <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        
        </Routes>
      </BrowserRouter>
          <Footer/>
   </div>
  );
}

export default App;
