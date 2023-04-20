import classes from "./Card.module.css";

interface PropsCard {
  children?: React.ReactNode;
}

const Card = (props: PropsCard) => {
  return <div className={classes.divBackground}>{props.children}</div>;
};

export default Card;
