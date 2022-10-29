import React,{useState} from "react";
import { Input ,Button } from "@mui/material";
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
        <br />
        <div className="emailInput">
        <Input placeholder="Enter Your Name"  error={errorText3 == "Only characters are allowed"}
                  helperText={errorText3}  name="name"  value={userData.name} sx={{backgroundColor:"white"}} onChange={handleOnChange} />
        </div>
        <br />
        <div className="emailInput">
        <Input placeholder="Enter Your Email"  error={errorText == "Invalid format"}
                  helperText={errorText} name="email"  value={userData.email} sx={{backgroundColor:"white"}} onChange={handleOnChange} />
        </div>
        <br />
        <div className="emailInput">
        <Input placeholder="Enter Your Password"
        error={errorText2 == "Must be atleast 8 characters"}
        helperText={errorText2} name="password" type="password" value={userData.password} sx={{backgroundColor:"white"}} onChange={handleOnChange} />
        </div>
        <br />
        <div className="signupButton">
        <Button className="buttonStyle" 
          onClick={handleOnChange}  isLoading={isLoading} variant="contained">Login</Button>
        </div>
        </div >
    )
}
export default Signup;