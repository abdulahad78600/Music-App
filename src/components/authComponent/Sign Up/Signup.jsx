import React,{useState}from "react";
import { Input, Button } from "@mui/material";
import background from "../../../assets/images/background.png";

import "./Signup.css";

const Signup=()=>
{
    const [userData, setUserData] = useState({
        
        name: "",
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
         <h1 className="heading">Create An Account?</h1>   
        </div>
        <div className="emailInput">
        <Input placeholder="Enter Your Email" name="name"  value={userData.name} sx={{backgroundColor:"white"}} onChange={handleOnChange}/>
        </div>
        <br />
        <div className="emailInput">
        <Input placeholder="Enter Your Email" name="email"  value={userData.email} sx={{backgroundColor:"white"}} onChange={handleOnChange} />
        </div>
        <br />
        <div className="emailInput">
        <Input placeholder="Enter Your Password" name="password" type="password"  value={userData.password} sx={{backgroundColor:"white"}} onChange={handleOnChange} />
        </div>
        <br />
        <div className="signupButton">
        <Button className="buttonStyle"  variant="contained">Signup</Button>
        </div>
        </div >
        
    )
}
export default Signup;