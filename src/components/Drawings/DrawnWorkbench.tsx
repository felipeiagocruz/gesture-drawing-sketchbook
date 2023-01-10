import { useState, useRef, RefObject, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import classes from "./DrawnWorkbench.module.css";
import { Tabs, Tab, Box, Slider, Button, Typography } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import TabPanel from "./TabPanel";

const DrawnWorkbench = () => {
  const [width, setWidth] = useState<number>(400);
  const [height, setHeight] = useState<number>(500);
  const [tracing, setTracing] = useState(false);
  const [color, setColor] = useState<string>("rgba(0,0,0,1)");
  const [corner, setCorner] = useState<string>("left");
  const [brushRadius, setBrushRadius] = useState<number>(3);
  const [tab, setTabs] = useState("one");

  const canvas = useRef() as RefObject<CanvasDraw>;

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
    setTabs(newValue);
  };

  const handleChangeBrush = (event: Event, newValue: number | number[]) => {
    setBrushRadius(newValue as number);
  };

  const handleChangeWidth = (event: Event, newValue: number | number[]) => {
    setWidth(newValue as number);
  };

  const handleChangeHeight = (event: Event, newValue: number | number[]) => {
    setHeight(newValue as number);
  };

  const handleChangeColor = (color: string) => {
    setColor(color as string);
  };

  const undo = () => {
    canvas ? canvas.current!.undo() : null;
  };
  const keydownHandler = (e: KeyboardEvent) => {
    if (e.key === "z" && e.ctrlKey) undo();
  };
  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
  }, []);

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
            <Box
              sx={{
                width: "90%",
                display: "flex",
                paddingTop: "7px",
                justifyContent: "space-around",
              }}
            >
              <Typography paddingTop={"3px"} color={"black"} width={"25%"}>
                Brush Radius
              </Typography>
              <Slider
                size="medium"
                defaultValue={brushRadius}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={handleChangeBrush}
                max={30}
                min={1}
              />
              <Typography paddingTop={"3px"} color={"black"} width={"25%"}>
                Brush Color
              </Typography>
              <MuiColorInput
                className={classes.colorPicker}
                value={color}
                onChange={handleChangeColor}
              />
            </Box>
          </TabPanel>

          <TabPanel index={"three"} value={tab}>
            <Box
              sx={{
                width: "90%",
                display: "flex",
                paddingTop: "6px",
                gap: "30px",
              }}
            >
              <Typography
                marginLeft={"20px"}
                paddingTop={"3px"}
                color={"black"}
              >
                Width
              </Typography>
              <Slider
                style={{ width: "30%" }}
                size="medium"
                defaultValue={width}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={handleChangeWidth}
                max={700}
              />
              <Typography paddingTop={"3px"} color={"black"}>
                Height
              </Typography>
              <Slider
                style={{ width: "30%" }}
                size="medium"
                defaultValue={height}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={handleChangeHeight}
                max={700}
              />
            </Box>
            {corner == "left" ? (
              <Button
                variant="outlined"
                onClick={() => {
                  setCorner("right");
                }}
              >
                To Right
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => {
                  setCorner("left");
                }}
              >
                To Left
              </Button>
            )}
          </TabPanel>
        </Box>

        <hr className={classes.hr} />
        <div className={classes.div}>
          <div
            className={classes.reference}
            style={{
              opacity: `${tracing ? "70" : "100"}%`,
              left: `${tracing ? "50%" : corner == "left" ? "0" : "100%"}`,
              top: `${tracing ? "50%" : "0"}`,
              translate: `${
                tracing ? "-50% -50%" : corner == "left" ? "0" : "-100%"
              }`,
              height: `${height}px`,
              width: `${width}px`,
              backgroundImage: `url("https://i.pinimg.com/originals/7b/a5/04/7ba504b73ad46105efa0f5b78cd1b932.jpg")`,
            }}
          ></div>
          <CanvasDraw
            ref={canvas}
            lazyRadius={0}
            brushRadius={brushRadius}
            canvasWidth={1300}
            canvasHeight={500}
            brushColor={color}
          />
        </div>
      </div>
    </>
  );
};

export default DrawnWorkbench;
