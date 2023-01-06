import { useState, useContext } from "react";
import Auth from "./components/Auth/Auth";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import { Link } from "react-router-dom";
import useAuthChecker from "./hooks/useAuthChecker";
import CanvasDrawn from "react-canvas-draw";

function App() {
  return (
    <div className="App">
      <Auth />
      <Link to="/collection">Collection</Link>

      <CanvasDrawn brushRadius={3} />
      <img
        src={
          "https://i.pinimg.com/236x/91/2d/6f/912d6f086b9080aba5706fc98ce6e9ba.jpg"
        }
      />
    </div>
  );
}

export default App;
