import React, { useState } from "react";
import { auth } from "../../../utils/Firebase";
import Logo from "../../../assets/images/logo.png";
import MusicButton from "../../commonComnents/Button";
import "./Forget.css";

const Forget = () => {
  const [userData, setUserData] = useState({
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const forget = () => {
    setIsLoading(true);
    auth
      .sendPasswordResetEmail(userData.email)
      .then((res) => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);

        console.log("--------", error);
      });
  };
  const emailRegex =
    /^([+\w-]+(?:.[+\w-]+))@((?:[\w-]+.)\w[\w-]{0,66}).([a-z]{2,6}(?:.[a-z]{2})?)$/i;
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
        <div className="logoContainer">
          <img className="logo" src={Logo} />
        </div>
        <div>
          <h1 className="heading">Forget Password</h1>
        </div>
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
        <MusicButton title="Send Email" isLoading={isLoading} onClick={forget} />
      </div>
    </div>
  );
};
export default Forget;
