import React, { useState } from "react";
import { Button } from "@mui/material";
import { auth } from '../../../utils/Firebase'
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../../assets/images/logo.png"


const Reset = ({ }) => {
  const location = useLocation();
  const passwordRegex = /^[a-zA-Z 1-9-0 ~`! ; : @#$%^&*]{8,}$/;
  const [userData, setUserData] = useState({
    newPassword: "",
  });
  const navigates = useNavigate();

  const resetPassword = async () => {

    const queryParams = new URLSearchParams(location.search)
    const oobCode = queryParams.get("oobCode");
    auth.confirmPasswordReset(oobCode, userData.newPassword).then(res => {
      navigates("/login")
    }).catch((error) => {
      console.log("--------", error)
    })

  }
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
       <div className="logoContainer"> 
      <img className="logo" src={Logo} />
      </div>
      <div>
        <h1 className="heading">Reset </h1>
        </div>
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
      <div>
        <br />
      </div>
      <div className="signupButton">
        <Button
          className="buttonStyle"
          onClick={resetPassword}
          variant="contained"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
export default Reset;