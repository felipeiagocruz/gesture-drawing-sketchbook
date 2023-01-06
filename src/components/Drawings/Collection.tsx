import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
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
      console.log(doc.id);
      setDrawings((prevArray) => [
        ...prevArray,
        { id: doc.id, data: doc.data() },
      ]);
    });
  };

  useEffect(() => {
    reload();
  }, []);

  return (
    <div>
      <h1>Collection</h1>
      <button onClick={reload}>Reload</button>
      <div className={classes.div}>
        {drawings.map((drawn) => {
          return (
            <CollectionDrawn
              key={drawn.id}
              id={drawn.id}
              name={drawn.data.name}
              reference={drawn.data.reference}
              date={drawn.data.date}
              data={drawn.data.data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
