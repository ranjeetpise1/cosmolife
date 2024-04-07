import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
              <div className="information">
                <h6 className="footer-heading text-uppercase text-white fw-bold">
                  Information
                </h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li className="mb-1">
                    <a
                      href=""
                      className="text-white text-decoration-none fw-semibold"
                    >
                      Events
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href=""
                      className="text-white text-decoration-none fw-semibold"
                    >
                      Our Team
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href=""
                      className="text-white text-decoration-none fw-semibold"
                    >
                      Upcoming Sale
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href=""
                      className="text-white text-decoration-none fw-semibold"
                    >
                      New Launches
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
              <div className="resources">
                <h6 className="footer-heading text-uppercase text-white fw-bold">
                  Resources
                </h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li className="mb-1">
                    <a
                      href=""
                      className="text-white text-decoration-none fw-semibold"
                    >
                      API
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href=""
                      className="text-white text-decoration-none fw-semibold"
                    >
                      Website Tutorials
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href=""
                      className="text-white text-decoration-none fw-semibold"
                    >
                      Third Party
                    </a>
                  </li>
                  <li className="">
                    <a
                      href=""
                      className="text-white text-decoration-none fw-semibold"
                    >
                      Video Lectures
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mt-4 col-lg-2 text-center text-sm-start">
              <div className="social">
                <h6 className="footer-heading text-uppercase text-white fw-bold">
                  Social
                </h6>
                <ul className="list-inline my-3">
                  <a
                    href="#"
                    className="fa fa-facebook"
                    style={{ margin: "5px" }}
                  ></a>
                  <a
                    href="#"
                    className="fa fa-linkedin"
                    style={{ margin: "5px" }}
                  ></a>
                  <a
                    href="#"
                    className="fa fa-instagram"
                    style={{ margin: "5px" }}
                  ></a>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 mt-4 col-lg-4 text-center text-sm-start">
              <div className="contact">
                <h6 className="footer-heading text-uppercase text-white fw-bold">
                  Contact Us
                </h6>
                <address className="mt-4 m-0 text-white mb-1">
                  <i className="bi bi-pin-map fw-semibold"></i> Vishrambaugh,
                  Sangli-416416
                </address>
                <a
                  href="tel:+"
                  className="text-white mb-1 text-decoration-none d-block fw-semibold"
                >
                  <i className="bi bi-telephone"></i> +91 7620157660
                </a>
                <a
                  href="mailto:"
                  className="text-white mb-1 text-decoration-none d-block fw-semibold"
                >
                  <i className="bi bi-envelope"></i> ranjeetpise7660@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center bg-dark text-white mt-4 p-1">
          <p className="mb-0 fw-bold">
            2024 © RanJeet Pise, All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
