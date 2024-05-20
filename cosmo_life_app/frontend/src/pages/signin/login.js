import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { config } from "../../config";
import { Form, Col } from "react-bootstrap";
import { image_bucket } from "../../utils";

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

const Signin = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [OTP, setOTP] = useState("");

  const navigate = useNavigate();

  const signinUser = () => {
    if (email.length === 0) {
      toast.warning("please enter email");
    } else if (password.length === 0) {
      toast.warning("please enter password");
    } else {
      const body = {
        email,
        password,
      };

      // url to make signin api call

      // make api call using axios
      axios.post(config.USR_REG_SIGNIN, body).then((response) => {
        // get the server result
        const result = response.data;
        if (result["status"] === "success") {
          toast.success(
            result.data.result.first_name +
              " " +
              result.data.result.last_name +
              ", Welcome to the application"
          );
          toast.info("Please check your Signed mail and paste token here..");
          setFlag(true);
          setData(response.data.data);
        } else {
          toast.error("Invalid user name or password");
        }
      });
    }
  };

  let retry = 0;

  const Authentication = () => {
    if (JSON.stringify(data.OTP) === OTP) {
      toast.success("Welcome to the Cosmo-Life cosmetice store");

      // get the data sent by server
      const { user_id, email, mobile_no, first_name, last_name, user_role } =
        data.result;

      // persist the logged in user's information for future use
      sessionStorage["user_id"] = user_id;
      sessionStorage["email"] = email;
      sessionStorage["mobile_no"] = mobile_no;
      sessionStorage["first_name"] = first_name;
      sessionStorage["last_name"] = last_name;
      sessionStorage["user_role"] = user_role;
      sessionStorage["loginStatus"] = 1;

      // navigate to home component
      navigate("/address");
    } else {
      toast.error(
        `OTP is inavlid Please try again, remaining retries :: ` + ++retry
      );
      if (retry === 2) setFlag(false);
    }
  };

  useEffect((e) => {
    if (sessionStorage.getItem("loginStatus") === "1") {
      navigate("/home");
    }
  }, []);

  return (
    <div>
      {flag === false ? (
        <div>
          <div
            style={{
              backgroundImage: `url(${image_bucket.SIGN_UP_PAGE_BACKGROUND_IMAGE})`,
              backgroundRepeat: "space",
              backgroundAttachment: "scroll",
              backgroundSize: "100% 110%",
              minHeight: "80vh",
            }}
          >
            <div className="row">
              <div className="col"></div>
              {/* <div className="col"></div> */}
              <div
                className="col"
                style={{
                  border: "3px solid white",
                  borderLeft: "none",
                  borderRight: "none",
                  borderRadius: "20px",
                  color: "ThreeDDarkShadow",
                  opacity: "5",
                  padding: "1% 5% 1% 5%",
                  margin: "15% 5% 15% 20%",
                  backdropFilter: "blur(2px)",
                  backgroundColor: "rgba(188, 194, 204, 0.4)",
                }}
              >
                <div className="form">
                  <h1 style={styles.heading1}>Signin</h1>
                  <div className="mb-3">
                    <label
                      htmlFor=""
                      className="label-control"
                      style={styles.heading2}
                    >
                      Email address
                    </label>
                    <dd />
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor=""
                      className="label-control"
                      style={styles.heading2}
                    >
                      Password
                    </label>
                    <dd />
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="password"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 d-grid">
                    <button
                      onClick={signinUser}
                      className="btn btn-primary btn-sm col-6 mx-auto"
                    >
                      Signin
                    </button>
                    <dd />
                    <div className="d-grid col-4 mx-auto">
                      <div>
                        <b>No account yet?</b>
                      </div>
                      <dd />
                      <Link
                        to="/signup"
                        className="btn btn-outline-dark btn-sm"
                      >
                        Signup here
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="wholepage">
          <div
            style={{
              backgroundImage: `url(${image_bucket.SIGN_UP_PAGE_BACKGROUND_IMAGE})`,
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
              height: "100",
              width: "100",
              backgroundSize: "100% 120%",
            }}
          >
            <div className="row">
              <div className="col"></div>
              {/* <div className="col"></div> */}
              <div
                className="col"
                style={{
                  border: "3px solid white",
                  borderLeft: "none",
                  borderRight: "none",
                  borderRadius: "20px",
                  color: "ThreeDDarkShadow",
                  opacity: "5",
                  padding: "1% 5% 1% 5%",
                  margin: "15% 5% 15% 20%",
                  backdropFilter: "blur(2px)",
                  backgroundColor: "rgba(188, 194, 204, 0.4)",
                }}
              >
                <div className="form">
                  <h1 style={styles.heading1}>Authentication</h1>
                  <div className="mb-3">
                    <label
                      htmlFor=""
                      className="label-control"
                      style={styles.heading2}
                    >
                      Token
                    </label>
                  </div>
                  <Form.Group as={Col}>
                    <Form.Control
                      type="text"
                      placeholder="Enter OTP here"
                      onChange={(e) => setOTP(e.target.value)}
                    />
                  </Form.Group>
                  <dd />
                  <div className="mb-3 d-grid">
                    <button
                      onClick={() => Authentication()}
                      className="btn btn-primary btn-sm d-grid col-6 mx-auto"
                    >
                      Submit
                    </button>
                    <dd />
                    <div className="d-grid col-4 mx-auto">
                      <Link to="/signup" class="btn btn-warning btn-sm mx-auto">
                        Signup here
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signin;
