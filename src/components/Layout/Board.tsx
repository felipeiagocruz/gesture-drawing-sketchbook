import classes from "./Board.module.css";

interface PropsBoard {
  children?: React.ReactNode;
}

const Board = (props: PropsBoard) => {
  return <div className={classes.div}>{props.children}</div>;
};

export default Board;
