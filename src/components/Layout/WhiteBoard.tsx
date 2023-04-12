import classes from "./WhiteBoard.module.css";

interface PropsWhiteBoard {
  children?: React.ReactNode;
}

const WhiteBoard = (props: PropsWhiteBoard) => {
  return <div className={classes.divBackground}>{props.children}</div>;
};

export default WhiteBoard;
