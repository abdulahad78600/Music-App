import React,{useState} from "react";
import { Input,Button } from "@mui/material";
import "./Forget.css";

const Forget=()=>
{
    const [userData, setUserData] = useState({
        
        email: "",
      });
      const emailRegex =
      /^([+\w-]+(?:\.[+\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
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
         <h1 className="heading">Forget Password</h1>   
        </div>
        <br />
        <div className="emailInput">
        <Input error={errorText == "Invalid format"}
                  helperText={errorText} placeholder="Enter Your Email"   name="email"  value={userData.email} sx={{backgroundColor:"white"}} onChange={handleOnChange} />
        </div>
        <br />
        <div className="signupButton">
        <Button className="buttonStyle" onClick={handleOnChange} variant="contained">Reset</Button>
        </div>
        </div >
    )
}
export default Forget;