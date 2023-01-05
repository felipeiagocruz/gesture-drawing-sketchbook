import { useState } from "react";
import Auth from "./components/Auth/Auth";
import Add from "./components/Drawings/Add";
import Collection from "./components/Drawings/Collection";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Auth />
      <Add />
      <Collection />
    </div>
  );
}

export default App;
