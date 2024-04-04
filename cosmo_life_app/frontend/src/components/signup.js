import React from "react";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [first_name, setFirstname] = useState();
  const [last_name, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile_no, setMobileNo] = useState();
  const [user_role, setUserRole] = useState("customer");

  const body = {
    first_name: first_name,
    last_name: last_name, 
    email: email, 
    password: password, 
    mobile_no: mobile_no, 
    user_role: user_role
  }

  function signup() {
    axios.post("http://localhost:4000/registration/signup",body,)
      // Handle the response from backend here
      .then((res) => {
        console.log(res);
      })
  
      // Catch errors if any
      .catch((err) => {});
  }

  return (
    <div>
      <div className="row">
        <div className="col-sm-3" />
        <h1>{first_name}</h1>
        <div
          className="col-sm-6"
          style={{ margin: "50px", border: "1px black solid", padding: "20px" }}
        >
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputFirstName"
                aria-describedby="emailHelp"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputLastName"
                aria-describedby="emailHelp"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputContact" className="form-label">
                Contact Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputContact"
                aria-describedby="emailHelp"
                onChange={(e) => setMobileNo(e.target.value)}
              />
            </div>
            <a href="./login">
              <label className="form-check-label" htmlFor="exampleCheck1">
                Already Have An Account?
              </label>
            </a>
            <br /> <br />
            <div>
              <button type="submit" className="btn btn-primary" onClick={e => signup()}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-3" />
      </div>
    </div>
  );
}
export default Signup;
