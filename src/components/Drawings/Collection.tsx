import { collection, query, where, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../services/firebase";
import CollectionDrawn from "./CollectionDrawn";
import classes from "./Collection.module.css";

const Collection = () => {
  const [drawings, setDrawings] = useState(Array());
  const reload = async () => {
    setDrawings([]);
    const snap = await getDocs(
      collection(db, "users", "qsrhaPvaxAhPiNuQuou97X0Z1Eu2", "drawings")
    );
    snap.forEach((doc) => {
      setDrawings((prevArray) => [...prevArray, doc.data()]);
    });
  };

  return (
    <div>
      <h1>Collection</h1>
      <button onClick={reload}>Reload</button>
      <div className={classes.div}>
        {drawings.map((drawn) => {
          return (
            <CollectionDrawn
              name={drawn.name}
              reference={drawn.reference}
              date={drawn.date}
              data={drawn.data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
