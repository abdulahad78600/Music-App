import React, { useState } from "react";
import { auth } from "../../../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { postAPI } from "../../../utils/api";
import Logo from "../../../assets/images/logo.png";
import MusicButton from "../../commonComnents/Button";
import { useSnackbar } from "notistack";
import "./Signup.css";

const Signup = () => {
  const navigates = useNavigate();
  const emailRegex =
    /^([+\w-]+(?:\.[+\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  const nameRegex = /^[a-zA-Z-\s/]+$/;
  const passwordRegex = /^[a-zA-Z 1-9-0 ~`! ; : @#$%^&*]{8,}$/;
  const [errorText, setErrorText] = useState("");
  const [errorText2, seterrorText2] = useState("");
  const [errorText3, setErrorText3] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const { enqueueSnackbar } = useSnackbar();

  const signUp = () => {
    setIsLoading(true)
    auth
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((res) => {
        saveDataOnFirebase(res.user.uid);
      })
      .catch((error) => {
        setIsLoading(false)
        enqueueSnackbar("Some thing went wrong", {
          anchorOrigin: {
            horizontal: "right",
            vertical: "top"
          },
          variant: "error"
        });
      });
  };

  const saveDataOnFirebase = async (id) => {
    const response = await postAPI(`updateUserNamePhone?id=${id}`, {
      name: userData.name,
      phone: userData.phone,
    });
    if (response.data) {
      enqueueSnackbar("Account created successfully ", {
        anchorOrigin: {
          horizontal: "right",
          vertical: "top"
        },
        variant: "success"
      });
      setIsLoading(false)
      navigates("/login");
    } else {
      console.log("--------error");
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    if (event.target.name == "email") {
      if (event.target.value.match(emailRegex)) {
        setErrorText("");
      } else {
        setErrorText("Invalid format");
      }
    } else if (event.target.name == "password") {
      if (event.target.value.match(passwordRegex)) {
        seterrorText2("");
      } else {
        seterrorText2("Must be atleast 8 characters");
      }
    } else if (event.target.name == "name") {
      if (event.target.value.match(nameRegex)) {
        setErrorText3("");
      } else {
        setErrorText3("Only characters are allowed");
      }
    } else {
      setErrorText("");
    }
  };

  return (
    <div className="main">
      <div className="mainContainer">
        <div className="logoContainer">
          <img className="logo" src={Logo} />
        </div>
        <div>
          <h1 className="heading">Create an account? </h1>
        </div>
      </div>
      <div className="emailInput">
        <span className="lableStyle">Name</span>
        <input
          className="signupInput"
          placeholder="Enter your name"
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleOnChange}
        />

        <div className="errorStyle"> {errorText3}</div>
      </div>
      <br />
      <div className="emailInput">
        <span className="lableStyle">Phone</span>
        <input
          className="signupInput"
          placeholder="Enter your phone number"
          type="text"
          id="phone"
          name="phone"
          value={userData.phone}
          onChange={handleOnChange}
        />

        <div className="errorStyle"> {errorText3}</div>
      </div>
      <br />
      <div className="emailInput">
        <span className="lableStyle">Email</span>
        <input
          className="signupInput"
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
        <span className="lableStyle">Password</span>
        <input
          className="signupInput"
          placeholder="Enter your password"
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleOnChange}
        />
        <div className="errorStyle"> {errorText2}</div>
      </div>
      <div>
        <br />
      </div>
      <div className="signupButton">
        <MusicButton title="Signup" isLoading={isLoading} onClick={signUp} />
      </div>
      <div className="bottom-text">
                <div className="account-heading">
                  <h5>Already have an Account?</h5>
                </div>
                <a className="signup-link" href="./login">
                  Login
                </a>
              </div>
    </div>
  );
};
export default Signup;
