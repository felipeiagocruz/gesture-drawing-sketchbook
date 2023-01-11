import Auth from "./components/Auth/Auth";
import classes from "./App.module.css";

import { Link } from "react-router-dom";
import DrawnWorkbench from "./components/Drawings/DrawnWorkbench";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <div className={classes.div}>
        <Typography
          textAlign={"left"}
          fontSize={"50px"}
          textTransform={"uppercase"}
          color={"black"}
        >
          Let's
        </Typography>
        <Typography
          textAlign={"left"}
          fontSize={"50px"}
          textTransform={"uppercase"}
          color={"black"}
        >
          {" "}
          try it!
        </Typography>

        <DrawnWorkbench />
      </div>
    </>
  );
}

export default App;
