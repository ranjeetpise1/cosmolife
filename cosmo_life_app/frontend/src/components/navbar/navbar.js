import React from "react";
import "./navbar.css";

function Navbar() {
  let login = false;

  return (
    <div style={{ marginTop: "50px" }}>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark container">
        <div className="container-fluid">
          <a className="navbar-brand" href="home">
            Home
          </a>
          <a className="navbar-brand" href="/products">
            Products
          </a>
          <a className="navbar-brand" href="/about">
            About Us
          </a>
          <a className="navbar-brand" href="/contact">
            Contact Us
          </a>
          <a className="navbar-brand" href="/feedback">
            Feedback
          </a>
          {login ? (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex">
                <button className="btn btn-outline-success" type="submit">
                  Cart
                </button>
                <button className="btn btn-outline-success" type="submit">
                  Profile
                </button>
              </form>
            </div>
          ) : (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex">
                <a href="/">Sign In</a>
              </form>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
