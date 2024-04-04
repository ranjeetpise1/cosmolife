import React from "react";
import "./navbar.css"; 

function Navbar() {
    let login = false;

    return (
        <div style={{marginTop:"50px"}}>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="home.js">Home</a>
                    <a className="navbar-brand" href="/products">Products</a>
                    <a className="navbar-brand" href="/about.js">About Us</a>
                    <a className="navbar-brand" href="/contact.js">Contact Us</a>
                    <a className="navbar-brand" href="/feedback.js">Feedback</a>
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
