import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { config } from "../../config";
import "bootstrap/dist/css/bootstrap.min.css";
import "./address.css";
import { Form, Col, Row } from "react-bootstrap";

const Address = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [postalCode, setPostalCode] = useState("");

  // used to navigate from one component to another
  const navigate = useNavigate();

  let token = localStorage.getItem("token");

  const AddressReg = () => {
    if (country.length === 0) {
      toast.warning("Please enter first name");
    } else if (state.length === 0) {
      toast.warning("Please enter last name");
    } else if (district.length === 0) {
      toast.warning("Please enter district");
    } else if (city.length === 0) {
      toast.warning("Please enter city");
    } else if (area.length === 0) {
      toast.warning("Please enter area");
    } else if (houseNo.length === 0) {
      toast.warning("Please enter house no.");
    } else if (postalCode.length === 0) {
      toast.warning("Please enter postalCode");
    } else {
      const body = {
        country,
        state,
        district,
        city,
        area,
        houseNo,
        postalCode,
      };

      // url to call the api
      const url = `${config.CART_ADD_TO_CART}`;

      // http method: post
      // body: contains the data to be sent to the API
      const options = {
        method: "POST",
        headers: { token: token },
        data: body,
        url,
      };
      axios(options).then((response) => {
        // get the data from the response
        const result = response.data;
        if (result["status"] === "success") {
          toast.success("Successfully signed up new user");
          // navigate to the signin page
          navigate("/vehicleregistration");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  // useEffect((e) => {
  //   if (sessionStorage.getItem("loginStatus") != 1) {
  //     navigate("/signin");
  //   }
  // }, []);

  const handlechange = () => {
    navigate("/home");
  };

  return (
    <div style={{ color: "white" }}>
      <div
        id="wholepage"
        style={{
          backgroundImage: `url('https://wallpaperaccess.com/full/5881879.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="row">
          <div
            className="col-sm-2"
            id="timeline"
            style={{ padding: "6% 1% 5% 1%", margin: "1%" }}
          ></div>
          <div className="col" style={{ padding: "5% 1% 5% 1%", margin: "2%" }}>
            <div
              className="form"
              id="form"
              style={{
                border: "3px solid white",
                borderLeft: "none",
                borderRight: "none",
                borderRadius: "20px",
                color: "ThreeDDarkShadow",
                opacity: "5",
                backdropFilter: "blur(2px)",
                backgroundColor: "rgba(188, 194, 204, 0.4)",
              }}
            >
              <br />
              <h1 id="fontcolorH1">Add Address</h1>
              <Form.Group className="mb-3" controlId="formGridCountry">
                <Row className="mb-3">
                  <Form.Group as={Col} xs={3}>
                    <Form.Label>Country</Form.Label>
                    <Form.Select
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                    >
                      <option>other..</option>
                      <option>China</option>
                      <option>India</option>
                      <option>United States</option>
                      <option>Indonesia</option>
                      <option>Pakistan</option>
                      <option>Brazil</option>
                      <option>Nigeria</option>
                      <option>Bangladesh</option>
                      <option>Russia</option>
                      <option>Mexico</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} xs={5} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                    >
                      <option>other..</option>
                      {country === "India" ? (
                        <>
                          <option>Andhra Pradesh</option>
                          <option>Assam</option>
                          <option>Bihar</option>
                          <option>Chandigarh</option>
                          <option>Dadra and Nagar Haveli</option>
                          <option>Daman and Diu</option>
                          <option>Delhi</option>
                          <option>Goa</option>
                          <option>Gujarat</option>
                          <option>Haryana</option>
                          <option>Himachal Pradesh</option>
                          <option>Jammu and Kashmir</option>
                          <option>Jharkhand</option>
                          <option>Karnataka</option>
                          <option>Kerala</option>
                          <option>Lakshadweep</option>
                          <option>Madhya Pradesh</option>
                          <option>Maharashtra</option>
                          <option>Manipur</option>
                          <option>Meghalaya</option>
                          <option>Mizoram</option>
                          <option>Nagaland</option>
                          <option>Orissa</option>
                          <option>Puducherry</option>
                          <option>Punjab</option>
                          <option>Rajasthan</option>
                          <option>Sikkim</option>
                          <option>Tamil Nadu</option>
                          <option>Telangana</option>
                          <option>Tripura</option>
                          <option>Uttar Pradesh</option>
                          <option>Uttarakhand</option>
                          <option>West Bengal</option>
                        </>
                      ) : (
                        <></>
                      )}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} xs={4} controlId="formGridDistrict">
                    <Form.Label>District</Form.Label>
                    <Form.Select
                      onChange={(e) => {
                        setDistrict(e.target.value);
                      }}
                    >
                      <option>other..</option>
                      {state === "Maharashtra" ? (
                        <>
                          <option>Ahmednagar</option>
                          <option>Akola</option>
                          <option>Amravati</option>
                          <option>Aurangabad</option>
                          <option>Beed</option>
                          <option>Bhandara</option>
                          <option>Buldhana</option>
                          <option>Chandrapur</option>
                          <option>Dhule</option>
                          <option>Gadchiroli</option>
                          <option>Gondia</option>
                          <option>Jalgaon</option>
                          <option>Jalna</option>
                          <option>Kolhapur</option>
                          <option>Latur</option>
                          <option>Mumbai City</option>
                          <option>Mumbai Suburban</option>
                          <option>Nagpur</option>
                          <option>Nanded</option>
                          <option>Nandurbar</option>
                          <option>Nashik</option>
                          <option>Osmanabad</option>
                          <option>Palghar</option>
                          <option>Parbhani</option>
                          <option>Pune</option>
                          <option>Raigad</option>
                          <option>Ratnagiri</option>
                          <option>Sangli</option>
                          <option>Satara</option>
                          <option>Sindhudurg</option>
                          <option>Solapur</option>
                          <option>Thane</option>
                          <option>Wardha</option>
                          <option>Washim</option>
                          <option>Yavatmal</option>
                        </>
                      ) : (
                        <></>
                      )}
                    </Form.Select>
                  </Form.Group>
                </Row>
              </Form.Group>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  City
                </label>
                <input
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Area
                </label>
                <input
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  House No.
                </label>
                <input
                  onChange={(e) => {
                    setHouseNo(e.target.value);
                  }}
                  type="number"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Postal Code
                </label>
                <input
                  onChange={(e) => {
                    setPostalCode(e.target.value);
                  }}
                  type="number"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <div>
                  Already have an account? <Link to="/signin">Signin here</Link>
                </div>
                <br />
                <Row>
                  <Form.Group as={Col} xs={4}>
                    <button
                      onClick={() => AddressReg()}
                      className="btn btn-warning"
                    >
                      Add Address
                    </button>
                  </Form.Group>

                  <Form.Group as={Col} xs={4}></Form.Group>

                  <Form.Group as={Col} xs={4}>
                    <button
                      onClick={() => handlechange()}
                      className="btn btn-warning"
                    >
                      Skip To Home
                    </button>
                  </Form.Group>
                </Row>
                <br />
              </div>
            </div>
          </div>
          <div
            className="col-sm-2"
            id="timeline"
            style={{ padding: "6% 1% 5% 1%", margin: "1%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Address;
