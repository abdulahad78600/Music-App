import React from "react";
// import LoadingButton from "@mui/lab/LoadingButton";
import { Button ,CircularProgress } from "@mui/material";
import "./Button.css";

const MusicButton = (props) => {
  return (
    <>
     
    
        <Button
          onClick={props.onClick}
          sx={{ color: "white" }}
          className="ptoButton"
          disabled={props.disabled}
          variant="w-100">
          { props.isLoading? <CircularProgress size={20} className="spiner-subs" sx={{color:"white" }} />: props.title}
        </Button>
      
    </>
  );
};
export default MusicButton;