import React,{useState} from "react";
import { TextField ,Button } from "@mui/material";
import "./Signup.css";

const Signup=()=>
{
    const emailRegex =
    /^([+\w-]+(?:\.[+\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  const nameRegex = /^[a-zA-Z-\s/]+$/;
  const passwordRegex = /^[a-zA-Z 1-9-0 ~`! ; : @#$%^&*]{8,}$/;
  const [errorText, setErrorText] = useState("");
  const [errorText2, seterrorText2] = useState("");
  const [errorText3, setErrorText3] = useState("");
  const [isLoading, setIsLoading] = useState(false);
const [userData, setUserData] = useState({
        name:"",
        email: "",
        password: "",
      });
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
      
      
    return(
        <div className="main">
        <div className="mainContainer">
         <h1 className="heading">Create an Account</h1>   
        </div>
 <div className="emailInput">
        <span className="email-h">Name</span>
                <input  className="signupInput" placeholder="Enter your name" type="text" id="name" name="name"  value={userData.name}
                  onChange={handleOnChange}  />
                  
                  <div className="errorStyle"> { errorText3}</div>
        </div>
        <br />
         <div className="emailInput">
        <span className="email-h">Email</span>
                <input  className="signupInput" placeholder="Enter your email" type="text" id="email" name="email"  value={userData.email}
                  onChange={handleOnChange}  />
                  
                  <div className="errorStyle"> { errorText}</div>
        </div>
        <br />
         <div className="emailInput">
        <span className="email-h">Password</span>
                <input  className="signupInput" placeholder="Enter your password" type="password" id="password" name="password"  value={userData.password}
                  onChange={handleOnChange}  />
                  <div className="errorStyle"> { errorText2}</div>
        </div>
        <br />
        <br />
        <div className="signupButton">
        <Button className="buttonStyle" 
          onClick={handleOnChange}  isLoading={isLoading} variant="contained">Signup</Button>
        </div>
        </div >
    )
}
export default Signup;