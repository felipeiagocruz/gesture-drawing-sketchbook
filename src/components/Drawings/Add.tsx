import { doc, addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase";
import ReactDOM from "react-dom";

import BackDrop from "../Layout/BackDrop";
import Card from "../Layout/Card";
import AddForm from "./AddForm";

import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useState } from "react";

const Add = () => {
  const [reference, setReference] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [addToggle, setAddToggle] = useState(false);
  const handleAddDrawing = async () => {
    console.log("Click");
    const ref = collection(
      doc(db, "users", "qsrhaPvaxAhPiNuQuou97X0Z1Eu2"),
      "drawings"
    );
    // Add a new document in collection "cities"
    await addDoc(ref, {
      name: name,
      reference: reference,
      data: "",
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
            ></BackDrop>,
            document.getElementById("backdrop-root")!
          )}
          {ReactDOM.createPortal(
            <Card>
              <AddForm
                add={handleAddDrawing}
                setReference={setReference}
                setName={setName}
                name={name}
                reference={reference}
              />
            </Card>,
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
