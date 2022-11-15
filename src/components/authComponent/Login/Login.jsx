import React, { useState } from "react";
import { Button } from "@mui/material";
import { auth } from "../../../utils/Firebase";
import { setToken, setIsFilled } from "../../../utils/LocalStorage";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import Logo from "../../../assets/images/logo.png";
import MusicButton from "../../commonComnents/Button";
import "./Login.css";

const Login = () => {
  const emailRegex =
    /^([+\w-]+(?:\.[+\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigates = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const signIn = () => {
    setIsLoading(true);
    auth
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then((res) => {
        setToken(res.user.multiFactor.user.accessToken);
        saveIsFilledBoolean(res.user.multiFactor.user.uid);
      })
      .catch((error) => {
        console.log("--------", error);
      });
  };

  const saveIsFilledBoolean = async (id) => {
    const db = firebase.firestore();
    const res = db.collection("users").doc(id);
    await res
      .get()
      .then((doc) => {
        if (doc.exists) {
          const user = doc.data();
          setIsFilled(user.is_form_filled);
          setIsLoading(false);

          navigates("/questionare");
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("Error getting document:", error);
      });
  };

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
          <h1 className="heading">LOGIN </h1>
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
      <br />
      <div className="emailInput">
        <div>
          <span className="lableStyle">Password</span>
        </div>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <br />
      </div>

      <div className="signupButton">
        <MusicButton title="Login" isLoading={isLoading} onClick={signIn} />
      </div>
    </div>
  );
};
export default Login;
