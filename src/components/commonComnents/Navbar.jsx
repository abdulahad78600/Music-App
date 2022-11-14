import React from "react"
import { Button } from "@mui/material";
import { deleteToken } from "../../utils/LocalStorage";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png"
import "./Navbar.css";

const Navbar=() => {
  const navigates = useNavigate();
  const logout = () => {
    deleteToken();
    navigates("/login");
  };
  return( 
    <div className="mainNavbar">
  <div>
  <img className="logoMusic" src={Logo} />
  </div>
     <div className="logout">
    <p className="paraColor" onClick={logout}>Logout</p>
   </div>
   </div>
  )

}
export default Navbar;