import { doc, addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const Add = () => {
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
    <Button
      variant="contained"
      onClick={() => {
        add();
      }}
      startIcon={<AddIcon />}
    >
      Add
    </Button>
  );
};

export default Add;
