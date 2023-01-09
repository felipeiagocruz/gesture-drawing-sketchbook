import { useState, useRef, RefObject } from "react";
import CanvasDraw from "react-canvas-draw";
import classes from "./DrawnWorkbench.module.css";

const DrawnWorkbench = () => {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);
  const [tracing, setTracing] = useState(false);

  const canvas = useRef() as RefObject<CanvasDraw>;

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
        <CanvasDraw
          ref={canvas}
          lazyRadius={0}
          brushRadius={3}
          canvasWidth={1300}
          canvasHeight={600}
        />
      </div>
      <button
        onClick={() => {
          canvas ? canvas.current!.clear() : null;
        }}
      >
        Clear
      </button>
      <button
        onClick={() => {
          canvas ? canvas.current!.undo() : null;
        }}
      >
        undo
      </button>
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
        height +
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
