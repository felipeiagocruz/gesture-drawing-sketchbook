import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
  deleteItem: () => void;
}

const Drawn = (props: Drawn) => {
  const navigate = useNavigate();
  return (
    <div>
      <>
        <div className={classes.menu}>
          <Typography textAlign={"left"} fontSize={"50px"} color={"white"}>
            {props.name}
          </Typography>
          <div className={classes.menuButtons}>
            <Button
              sx={{
                textDecoration: "none",
                marginRight: "1rem",
              }}
              variant="contained"
              onClick={() => {
                props.deleteItem();
                navigate("/mydrawings");
              }}
            >
              Delete
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
