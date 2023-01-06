import { useState } from "react";
import CanvasDraw from "react-canvas-draw";
import classes from "./DrawnWorkbench.module.css";

const DrawnWorkbench = () => {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);
  const [tracing, setTracing] = useState(false);
  return (
    <>
      <div className={classes.div}>
        <div
          className={classes.reference}
          style={{
            opacity: `${tracing ? "70" : "100"}%`,
            left: `${tracing ? "50%" : "0"}`,
            top: `${tracing ? "50%" : "0"}`,
            translate: `${tracing ? "-50% -50%" : "0"}`,
            height: `${height}px`,
            width: `${width}px`,
            backgroundImage: `url("https://i.pinimg.com/236x/91/2d/6f/912d6f086b9080aba5706fc98ce6e9ba.jpg")`,
          }}
        ></div>
        <CanvasDraw brushRadius={3} canvasWidth={1300} canvasHeight={900} />
      </div>
      <button
        onClick={() => {
          setWidth(width + 10);
        }}
      >
        width +
      </button>
      <button
        onClick={() => {
          setHeight(height + 10);
        }}
      >
        heigt +
      </button>
      <button
        onClick={() => {
          setTracing(!tracing);
        }}
      >
        tracing
      </button>
    </>
  );
};

export default DrawnWorkbench;
