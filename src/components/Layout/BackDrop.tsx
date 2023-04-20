import classes from "./BackDrop.module.css";

interface PropsGrayScreen {
  children?: React.ReactNode;
  dismiss: () => void;
}

const GrayScreen = (props: PropsGrayScreen) => {
  return (
    <>
      <div onClick={props.dismiss} className={classes.div}>
        {props.children}
      </div>
    </>
  );
};

export default GrayScreen;
