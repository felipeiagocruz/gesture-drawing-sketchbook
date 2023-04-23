import {
  collection,
  query,
  getDocs,
  orderBy,
  QuerySnapshot,
  DocumentData,
  Query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import CollectionDrawn from "./MyDrawns";
import Add from "../../components/Drawings/Add";
import classes from "./Collection.module.css";
import { Typography, Button } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

interface Drawing {
  id: string;
  data: any;
}

const Collection = () => {
  const [drawings, setDrawings] = useState(Array());
  const reload = async () => {
    console.log("TRIGGER!");
    setDrawings([]);
    const snap: QuerySnapshot<DocumentData> = await getDocs(
      collection(db, "users", "qsrhaPvaxAhPiNuQuou97X0Z1Eu2", "drawings")
    );
    const q: Query<DocumentData> = query(snap.query, orderBy("time"));
    const newDrawings: Drawing[] = [];
    snap.forEach((doc) => {
      console.log(doc.id);
      newDrawings.push({ id: doc.id, data: doc.data() });
    });
    setDrawings(newDrawings);
    console.log("END!");
  };

  useEffect(() => {
    reload();
  }, []);

  return (
    <div>
      <div className={classes.menu}>
        <Typography
          textAlign={"left"}
          fontSize={"50px"}
          textTransform={"uppercase"}
          color={"black"}
        >
          My drawings
        </Typography>
        <div className={classes.menuButtons}>
          <Button
            variant="contained"
            onClick={reload}
            startIcon={<ReplayIcon />}
            sx={{ marginRight: "1rem" }}
          >
            Reload
          </Button>
          <Add />
        </div>
      </div>
      {drawings.length !== 0 ? (
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
      ) : (
        <div className={classes.divEmpty}>
          <div className={classes.divImage}></div>
          <div className={classes.divEmptyTexts}>
            <Typography textAlign={"left"} fontSize={"30px"} color={"black"}>
              It's so empty here...
            </Typography>
            <Typography textAlign={"left"} fontSize={"30px"} color={"black"}>
              Add a new drawing by clicking on the button above.
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
