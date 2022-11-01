import React, { useState } from "react";
import { Button } from "@mui/material";

const Reset = () => {
  const passwordRegex = /^[a-zA-Z 1-9-0 ~`! ; : @#$%^&*]{8,}$/;
  const [userData, setUserData] = useState({
    code: "",
    newPassword: "",
  });
  const [errorText2, seterrorText2] = useState("");

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    if (event.target.name == "password") {
      if (event.target.value.match(passwordRegex)) {
        seterrorText2("");
      } else {
        seterrorText2("Must be atleast 8 characters");
      }
    }
  };
  return (
    <div className="main">
      <div className="mainContainer">
        <h1 className="heading">Reset Password</h1>
      </div>
      <br />

      <div className="emailInput">
        <span className="lableStyle">Code</span>
        <input
          className="loginInput"
          placeholder="Enter your Code"
          type="text"
          id="code"
          name="code"
          value={userData.code}
          onChange={handleOnChange}
        />
      </div>
      <br />

      <div className="emailInput">
        <span className="lableStyle">New Password</span>
        <input
          className="loginInput"
          placeholder="Enter your new Password"
          type="password"
          id="newPassword"
          name="newPassword"
          value={userData.newPassword}
          onChange={handleOnChange}
        />
        <div className="errorStyle"> {errorText2}</div>
      </div>
      <br />
      <br />
      <div className="signupButton">
        <Button
          className="buttonStyle"
          onClick={handleOnChange}
          variant="contained"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
export default Reset;
