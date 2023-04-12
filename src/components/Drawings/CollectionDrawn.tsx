import classes from "./CollectionDrawn.module.css";

declare interface Drawn {
  id: string;
  name: string;
  reference: string;
  date: string;
  data: string;
}

const CollectionDrawn = (props: Drawn) => {
  return (
    <div className={classes.div}>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <a href={`/drawn/${props.id}`}>
        <img src={props.reference} />
      </a>
      <p>{props.date}</p>
      <p>{props.data}</p>
    </div>
  );
};

export default CollectionDrawn;
