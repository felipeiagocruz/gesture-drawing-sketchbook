import { doc, addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase";

const Button = () => {
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
      date: "4342",
    });
  };
  return (
    <button
      onClick={() => {
        add();
      }}
    >
      Add
    </button>
  );
};

export default Button;
