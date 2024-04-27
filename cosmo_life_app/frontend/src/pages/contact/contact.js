import { useEffect } from "react";
import { useNavigate } from "react-router";

function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("loginStatus") !== "1") {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1">
            Any Query Ellaborate Us...!
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
