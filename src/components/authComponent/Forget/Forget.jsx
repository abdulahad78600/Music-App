import React, { useState } from "react";
import {  Button } from "@mui/material";
import "./Forget.css";

const Forget = () => {
  const [userData, setUserData] = useState({
    email: "",
  });
  const emailRegex =
    /^([+\w-]+(?:\.[+\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  const [errorText, setErrorText] = useState("");
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    if (event.target.name == "email") {
      if (event.target.value.match(emailRegex)) {
        setErrorText("");
      } else {
        setErrorText("Invalid format");
      }
    }
  };
  return (
    <div className="main">
      <div className="mainContainer">
        <h1 className="heading">Reset</h1>
      </div>
      <br />
      <div className="emailInput">
        <span className="lableStyle">Email</span>
        <input
          className="loginInput"
          placeholder="Enter your email"
          type="text"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleOnChange}
        />

        <div className="errorStyle"> {errorText}</div>
      </div>
      <div>
        <br />
      </div>
      <div className="signupButton">
        <Button
          className="buttonStyle"
          onClick={handleOnChange}
          variant="contained"
        >
          Send Email
        </Button>
      </div>
    </div>
  );
};
export default Forget;
