import React,{useState} from "react";
import { Input,Button } from "@mui/material";
import "./Forget.css";

const Forget=()=>
{
    const [userData, setUserData] = useState({
        
        email: "",
      });
      const handleOnChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
      }
    return(
        <div className="main">
        <div className="mainContainer">
         <h1 className="heading">Reset Password</h1>   
        </div>
        <br />
        <div className="emailInput">
        <Input placeholder="Enter Your Email"  name="email"  value={userData.email} sx={{backgroundColor:"white"}} onChange={handleOnChange} />
        </div>
        <br />
        <div className="signupButton">
        <Button className="buttonStyle" onClick={handleOnChange} variant="contained">Reset</Button>
        </div>
        </div >
    )
}
export default Forget;