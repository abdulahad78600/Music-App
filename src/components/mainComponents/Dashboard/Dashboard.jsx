import "./Dashboard.css";
import { deleteToken } from "../../../utils/LocalStorage";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./Dashboard.css";

const Dashboard = () => {
const navigates = useNavigate();
  const logout = () => {
    deleteToken();
    navigates("/login");
  };
  return (
    <>
      <div>
        <div>
          <h1 className="h1"> dashboard</h1>
        </div>
        <div className="signupButton">
        <Button
          className="buttonStyle"
          onClick={logout}
          variant="contained"
        >
          Logout
        </Button>
      </div>
      </div>
    </>
  );
};
export default Dashboard;