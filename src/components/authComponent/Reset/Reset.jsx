import React,{useState} from "react";
import { Input , Button } from "@mui/material";

const Reset=()=>
{
    const [userData, setUserData] = useState({
        
        code: "",
        newPassword:""
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
        <Input placeholder="Enter Code"  name="code"  value={userData.code} sx={{backgroundColor:"white"}} onChange={handleOnChange} />
        </div>
        <br />
        <div className="emailInput">
        <Input placeholder="Enter New Password"  name="newPassword" type="password" value={userData.newPassword} sx={{backgroundColor:"white"}} onChange={handleOnChange} />
        </div>
        <br />
        <div className="signupButton">
        <Button className="buttonStyle" onClick={handleOnChange} variant="contained">Reset</Button>
        </div>
        </div >
    )
}
export default Reset;