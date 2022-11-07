import { Reset, Login, Signup, Forget } from './components/authComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/mainComponents';
import PrivateRoute from './routes/PrivateRouting';
import PublicRoute from './routes/PublicRouting';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path="/login"
          element={
            <PublicRoute restricted>
              {" "}
              <Login />
            </PublicRoute>
          }
        />
         <Route
          path="/signup"
          element={
            <PublicRoute restricted>
              {" "}
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/reset"
          element={
            <PublicRoute restricted>
              {" "}
              <Reset />
            </PublicRoute>
          }
        />
         <Route
          path="/forget"
          element={
            <PublicRoute restricted>
              {" "}
              <Forget />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              {" "}
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
