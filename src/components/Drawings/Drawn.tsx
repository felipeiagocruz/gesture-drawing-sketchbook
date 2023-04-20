import { Typography, Button } from "@mui/material";
import classes from "./Drawn.module.css";
import DrawnWorkbench from "../Drawings/DrawnWorkbench";

declare interface Drawn {
  id?: string;
  name?: string;
  reference?: string;
  data?: string;
  date?: string;
}

const Drawn = (props: Drawn) => {
  return (
    <div>
      <>
        <div className={classes.menu}>
          <Typography textAlign={"left"} fontSize={"50px"} color={"white"}>
            {props.name}
          </Typography>
          <div className={classes.menuButtons}>
            <Button variant="contained" sx={{ marginRight: "1rem" }}>
              Save
            </Button>
            <Button variant="contained" sx={{ marginRight: "1rem" }}>
              Close
            </Button>
          </div>
        </div>
        <DrawnWorkbench
          data={props.data || ""}
          reference={props.reference || ""}
          heigth={window.innerHeight}
          width={window.innerWidth}
        />
      </>
    </div>
  );
};

export default Drawn;
