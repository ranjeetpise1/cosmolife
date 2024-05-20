import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { isUserLoggedIn } from "../../utils";

function Feedback() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn()) {
      navigate("/");
    }
  });
  return (
    <div>
      <h1>Feedback</h1>
    </div>
  );
}

export default Feedback;
