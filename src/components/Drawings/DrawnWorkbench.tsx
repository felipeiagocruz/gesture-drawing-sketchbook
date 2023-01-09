import { useState, useRef, RefObject } from "react";
import CanvasDraw from "react-canvas-draw";
import classes from "./DrawnWorkbench.module.css";
import { Tabs, Tab, Box, Slider, Button, Typography } from "@mui/material";
import TabPanel from "./TabPanel";

const DrawnWorkbench = () => {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);
  const [tracing, setTracing] = useState(false);
  const [brushRadius, setBrushRadius] = useState<number>(3);
  const [tab, setTabs] = useState("one");

  const canvas = useRef() as RefObject<CanvasDraw>;

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
    setTabs(newValue);
  };

  const handleChangeBrush = (event: Event, newValue: number | number[]) => {
    setBrushRadius(newValue as number);
  };

  return (
    <>
      <div className={classes.workbenchMenu}>
        <Box sx={{ width: "100%" }}>
          <Tabs onChange={handleChangeTabs} value={tab}>
            <Tab value="one" label="Drawn" />
            <Tab value="two" label="Brush" />
            <Tab value="three" label="Reference" />
          </Tabs>
          <TabPanel index={"one"} value={tab}>
            {tracing ? (
              <Button
                variant="outlined"
                onClick={() => {
                  setTracing(!tracing);
                }}
              >
                Tracing
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => {
                  setTracing(!tracing);
                }}
              >
                Tracing
              </Button>
            )}
            <Button
              variant="contained"
              onClick={() => {
                canvas ? canvas.current!.undo() : null;
              }}
            >
              Undo
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                canvas ? canvas.current!.clear() : null;
              }}
            >
              Clear
            </Button>
          </TabPanel>

          <TabPanel index={"two"} value={tab}>
            <Box sx={{ width: "30%", display: "flex", paddingTop: "6px" }}>
              <Typography color={"black"} width={"60%"}>
                Brush Radius
              </Typography>
              <Slider
                size="medium"
                defaultValue={brushRadius}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={handleChangeBrush}
                max={30}
              />
            </Box>
          </TabPanel>
        </Box>

        <hr />
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
            brushRadius={brushRadius}
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
      </div>
    </>
  );
};

export default DrawnWorkbench;
