import { Typography, Button } from "@mui/material";
import classes from "./Drawn.module.css";
import DrawnWorkbench from "../Drawings/DrawnWorkbench";
import { Link } from "react-router-dom";

declare interface Drawn {
  id?: string;
  name?: string;
  reference?: string;
  data?: string;
  date?: string;
  setData: (getData: string) => Promise<void>;
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
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/mydrawings"
            >
              <Button
                sx={{
                  textDecoration: "none",
                }}
                variant="contained"
              >
                Close
              </Button>
            </Link>
          </div>
        </div>
        <DrawnWorkbench
          data={props.data || ""}
          reference={props.reference || ""}
          heigth={window.innerHeight}
          width={window.innerWidth}
          setData={props.setData}
          id={props.id || ""}
        />
      </>
    </div>
  );
};

export default Drawn;
