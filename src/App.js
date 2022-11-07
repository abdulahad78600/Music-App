import { Reset,Login,Signup,Forget } from './components/authComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PublicRoute from './routes/PublicRouting';
import PrivateRoute from './routes/PrivateRouting';
import './App.css';

function App() {
  return (  
    <BrowserRouter>
    <Routes>
      <Route
        path="/signup"
        element={
         
            <Signup />
        }
      />
         <Route
        path="/login"
        element={
         
            <Login />
        }
      />
      <Route
        path="/reset"
        element={
         
            <Reset />
        }
      /><Route
      path="/forget"
      element={
       
          <Forget />
      }
    />
       </Routes>
    </BrowserRouter>

  );
}

export default App;
