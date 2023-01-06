import Drawn from "../components/Drawings/Drawn";
import { doc, getDoc } from "firebase/firestore";
import { Navigate, useParams } from "react-router-dom";
import { db } from "../services/firebase";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useAuthChecker from "../hooks/useAuthChecker";
declare interface DocumentData {
  reference?: string;
  date?: string;
  data?: string;
  name?: string;
}
export default function DrawnPage() {
  useAuthChecker();
  const { uid } = useContext(AuthContext);
  const { id } = useParams();
  const [drawn, setDrawn] = useState<DocumentData>();

  const loadItem = async () => {
    console.log(`users/${uid}/drawings`);
    const docRef = doc(db, `users/${uid}/drawings`, `${id}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const drawnSnap: DocumentData = docSnap.data();
      setDrawn(drawnSnap);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    loadItem();
  }, [uid]);

  return (
    <div>
      {drawn ? (
        <>
          <p>Drawn id {id}</p>
          <p>{drawn.name}</p>
          <img src={drawn.reference}></img>
          <p>{drawn.date}</p>
          <p>{drawn.data}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
