import classes from "./CollectionDrawn.module.css";
import EditIcon from "@mui/icons-material/Edit";

declare interface Drawn {
  id: string;
  name: string;
  reference: string;
  date: string;
  data: string;
}

const CollectionDrawn = (props: Drawn) => {
  return (
    <div
      className={classes.div}
      style={{ backgroundImage: `url("${props.reference}")` }}
    >
      <p className={classes.tag}>{props.name}</p>
      <a href={`/drawn/${props.id}`}>{/* <img src={props.reference} /> */}</a>
      <div className={classes.menu}>
        <p className={classes.buttons}>
          <EditIcon />
        </p>
      </div>
    </div>
  );
};

export default CollectionDrawn;
