import { useState, useContext } from "react";
import Auth from "./components/Auth/Auth";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import { Link } from "react-router-dom";
import DrawnWorkbench from "./components/Drawings/DrawnWorkbench";

function App() {
  return (
    <div className="App">
      <Auth />
      <Link to="/collection">Collection</Link>
      <DrawnWorkbench />
    </div>
  );
}

export default App;
