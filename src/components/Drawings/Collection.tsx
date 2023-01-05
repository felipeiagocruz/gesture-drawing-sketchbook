import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

const Collection = () => {
  const reload = async () => {
    const snap = await getDocs(
      collection(db, "users", "qsrhaPvaxAhPiNuQuou97X0Z1Eu2", "drawings")
    );
    snap.forEach((doc) => {
      console.log(doc.data());
    });
  };

  return (
    <div>
      <h1>Collection</h1>
      <button onClick={reload}>Reload</button>
    </div>
  );
};

export default Collection;
