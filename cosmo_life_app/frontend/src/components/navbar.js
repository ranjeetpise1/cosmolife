import React from "react";
import "./navbar.css"; 

function Navbar() {
    let login = false;

    return (
        <div className="container" style={{marginTop:"50px"}}>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="home">Home</a>
                    <a className="navbar-brand" href="/products">Products</a>
                    <a className="navbar-brand" href="/about">About Us</a>
                    <a className="navbar-brand" href="/contact">Contact Us</a>
                    <a className="navbar-brand" href="/feedback">Feedback</a>
                    { login? 
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex">
                                <button className="btn btn-outline-success" type="submit">Cart</button>
                                <button className="btn btn-outline-success" type="submit">Profile</button>
                            </form>
                        </div>
                        :
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex">
                                <a href="./signup.js"><button className="btn btn-outline-success" type="submit">Sign In</button></a>
                            </form>
                        </div>
                    }
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
