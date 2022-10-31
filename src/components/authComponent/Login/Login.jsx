import React,{useState} from "react";
import {  Button,TextField } from "@mui/material";

import "./Login.css";

const Login=()=>
{
  const emailRegex =
    /^([+\w-]+(?:\.[+\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const [userData, setUserData] = useState({
        
        email: "",
        password: "",
      });
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
      }
      
    return(
        <div className="main">
        <div className="mainContainer">
         <h1 className="heading">LOGIN </h1>   
        </div>
        <br />
        
        <div className="emailInput">
        <span className="email-h">Email</span>
        {/* <TextField
                  sx={{backgroundColor:"white"}}
                  error={errorText == "Invalid Format"}
                  helperText={errorText}
                  id="outlined-basic"
                  label="Enter your email"
                  variant="standard"
                  name="email"
                  size="small"
                  value={userData.email}
                  onChange={handleOnChange}
                /> */}
                <input  className="loginInput" placeholder="Enter your email" type="text" id="email" name="email"  value={userData.email}
                  onChange={handleOnChange}  />
                  
                  <div className="errorStyle"> { errorText}</div>
        </div>
        <br />
        <div className="emailInput">
        <span className="passwordHeading">Password</span>
        {/* <TextField
                  sx={{backgroundColor:"white"}}
                  id="standard-multiline-flexible"
                  label="Password"
                  value={userData.password}
                  onChange={handleOnChange}
                  variant="standard"
                  name="password"
                  type="password"
                /> */}
                 <input  className="loginInput" type="text" placeholder="Enter your password" id="password" name="password"  value={userData.password}
                  onChange={handleOnChange}  />
        </div>
        <br />
        <br />
        <div className="signupButton">
        <Button className="buttonStyle" onClick={handleOnChange} variant="contained">Login</Button>
        </div>
        </div >
    )
}
export default Login;