import React,{useState} from "react";
import { TextField, Button } from "@mui/material";

const Reset=()=>
{
  const passwordRegex = /^[a-zA-Z 1-9-0 ~`! ; : @#$%^&*]{8,}$/;
    const [userData, setUserData] = useState({
        
        code: "",
        newPassword:""
      });
  const [errorText2, seterrorText2] = useState("");

      const handleOnChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
        if (event.target.name == "password") {
          if (event.target.value.match(passwordRegex)) {
            seterrorText2("");
          } else {
            seterrorText2("Must be atleast 8 characters");
          }
        } 
      }
    return(
        <div className="main">
        <div className="mainContainer">
         <h1 className="heading">Reset Password</h1>   
        </div>
        <br />
        <div className="emailInput">
        <TextField
                    sx={{backgroundColor:"white"}}
                  
                  id="outlined-basic"
                  label="Code"
                  variant="standard"
                  name="code"
                  size="small"
                  value={userData.code}
                  onChange={handleOnChange}
                />
        </div>
        <br />
        <div className="emailInput">
        <TextField
                    sx={{backgroundColor:"white"}}
                    error={errorText2 == "Password must be atleast 8 digit"}
                 helperText={errorText2}
                  id="outlined-basic"
                  label="Password"
                  variant="standard"
                  name="password"
                  size="small"
                  value={userData.password}
                  onChange={handleOnChange}
                />
        </div>
        <br />
        <div className="signupButton">
        <Button className="buttonStyle" onClick={handleOnChange} variant="contained">Reset</Button>
        </div>
        </div >
    )
}
export default Reset;