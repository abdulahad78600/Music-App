import React,{useState} from "react";
import { Input ,Button } from "@mui/material";
import "./Login.css";

const Login=()=>
{
    const [userData, setUserData] = useState({
        
        email: "",
        password: "",
      });
      const handleOnChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
      }
      
    return(
        <div className="main">
        <div className="mainContainer">
         <h1 className="heading">Login to Account</h1>   
        </div>
        <br />
        <div className="emailInput">
        <Input placeholder="Enter Your Email"  name="email"  value={userData.email} sx={{backgroundColor:"white"}} onChange={handleOnChange} />
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