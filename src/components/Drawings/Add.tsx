import { doc, addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase";
import ReactDOM from "react-dom";

import BackDrop from "../Layout/BackDrop";
import Card from "../Layout/Card";

import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useState } from "react";

const Add = () => {
  const [addToggle, setAddToggle] = useState(false);
  const add = async () => {
    console.log("Click");
    const ref = collection(
      doc(db, "users", "qsrhaPvaxAhPiNuQuou97X0Z1Eu2"),
      "drawings"
    );
    // Add a new document in collection "cities"
    await addDoc(ref, {
      name: "Los Angeles",
      reference:
        "https://i.pinimg.com/236x/91/2d/6f/912d6f086b9080aba5706fc98ce6e9ba.jpg",
      data: "USA",
      date: new Date().getTime(),
    });
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          setAddToggle(!addToggle);
        }}
        startIcon={<AddIcon />}
      >
        Add
      </Button>
      {addToggle ? (
        <>
          {ReactDOM.createPortal(
            <BackDrop
              dismiss={() => {
                setAddToggle(!addToggle);
              }}
            >
              <Card>a</Card>
            </BackDrop>,
            document.getElementById("backdrop-root")!
          )}
          {ReactDOM.createPortal(
            <div></div>,
            document.getElementById("overlay-root")!
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Add;
