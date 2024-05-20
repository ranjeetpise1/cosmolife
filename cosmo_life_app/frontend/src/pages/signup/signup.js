import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "../../config";
import { image_bucket } from "../../utils";
import TextField from "@mui/material/TextField";

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
    fontSize: "1.5em",
    Display: "flex",
    fontWidth: "100%",
    fontWeight: "bolder",
    textShadow: "5px 10px 10px black",
    color: "white",
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

const Signup = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [mobile_no, setMobile_no] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user_role, setUserRole] = useState("customer");

  // used to navigate from one component to another
  const navigate = useNavigate();

  const signupUser = () => {
    if (first_name.length === 0) {
      toast.warning("Please enter first name");
    } else if (last_name.length === 0) {
      toast.warning("Please enter last name");
    } else if (mobile_no.length === 0) {
      toast.warning("Please enter mobile Number");
    } else if (email.length === 0) {
      toast.warning("Please enter email");
    } else if (password.length === 0) {
      toast.warning("Please enter password");
    } else if (confirmPassword.length === 0) {
      toast.warning("Please confirm your password");
    } else if (password !== confirmPassword) {
      toast.warning("Password does not match");
    } else {
      const body = {
        first_name,
        last_name,
        mobile_no,
        email,
        password,
        user_role,
      };

      // http method: post
      // body: contains the data to be sent to the API
      axios.post(config.USR_REG_SIGNUP, body).then((response) => {
        // get the data from the response
        const result = response.data;
        if (result["status"] === "success") {
          toast.success("Successfully signed up new user");

          // navigate to the signin page
          navigate("/");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image_bucket.SIGN_UP_PAGE_BACKGROUND_IMAGE})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "100% 100%",
        height: "100",
        width: "100",
      }}
    >
      {" "}
      <div className="row">
        <div
          className="col"
          id="timeline"
          style={{ padding: "10% 1% 10% 1%", margin: "1%" }}
        ></div>
        <div
          className="col"
          style={{
            padding: "10% 1% 10% 1%",
            margin: "1%",
          }}
        >
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
            <h1 style={styles.heading1}>Signup</h1>
            <div className="mb-3">
              <TextField
                fullWidth
                label="First Name"
                variant="filled"
                id="fullWidth"
                className="form-control"
                onChange={(e) => {
                  setFirst_name(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <TextField
                fullWidth
                label="Last Name"
                variant="filled"
                id="fullWidth"
                className="form-control"
                onChange={(e) => {
                  setLast_name(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <TextField
                fullWidth
                label="Mobile Number"
                variant="filled"
                id="fullWidth"
                className="form-control"
                onChange={(e) => {
                  setMobile_no(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <TextField
                fullWidth
                label="E-mail"
                variant="filled"
                id="fullWidth"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <TextField
                fullWidth
                label="Password"
                variant="filled"
                id="fullWidth"
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <TextField
                fullWidth
                label="Confirm Password"
                variant="filled"
                id="fullWidth"
                className="form-control"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <button
                onClick={signupUser}
                className="btn btn-primary btn-lg d-grid col-11 mx-auto"
                id="fontcolor"
              >
                Signup
              </button>
            </div>
            <div className="mb-3" style={{ marginTop: "20px" }}>
              <div className="d-grid col-6 mx-auto">
                <b>Already have an account?</b>
                <dd />
                <Link
                  to="/"
                  className="btn btn-outline-dark btn-sm d-grid col-12 mx-auto"
                >
                  Signin here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
