import { useState, useContext } from "react";
import Auth from "./components/Auth/Auth";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;
