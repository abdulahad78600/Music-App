import React from "react";
import { Reset, Login, Signup, Forget } from "./components/authComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Questionare, MusicPlay } from "./components/mainComponents";
import PrivateRoute from "./routes/PrivateRouting";
import PublicRoute from "./routes/PublicRouting";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute restricted>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute restricted>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/reset"
          element={
            <PublicRoute restricted>
              <Reset />
            </PublicRoute>
          }
        />
        <Route
          path="/forget"
          element={
            <PublicRoute restricted>
              <Forget />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/questionare"
          element={
            <PrivateRoute>
              <Questionare />
            </PrivateRoute>
          }
        />
        <Route
          path="/musicplay"
          element={
            <PrivateRoute>
              <MusicPlay />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
