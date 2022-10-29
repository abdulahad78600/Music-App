import React,{useState} from "react";
import { Input ,Button } from "@mui/material";
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
         <h1 className="heading">Login to Account</h1>   
        </div>
        <br />
        <div className="emailInput">
        <Input placeholder="Enter Your Email"  name="email"  error={errorText == "Invalid format"}
                  helperText={errorText} value={userData.email} sx={{backgroundColor:"white"}} onChange={handleOnChange} />
        </div>
        <br />
        <div className="emailInput">
        <Input placeholder="Enter Your Password" name="password" type="password" value={userData.password} sx={{backgroundColor:"white"}} onChange={handleOnChange} />
        </div>
        <br />
        <div className="signupButton">
        <Button className="buttonStyle" onClick={handleOnChange} variant="contained">Login</Button>
        </div>
        </div >
    )
}
export default Login;