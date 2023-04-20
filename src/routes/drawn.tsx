import Drawn from "../components/Drawings/Drawn";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Navigate, useParams } from "react-router-dom";
import { db } from "../services/firebase";
import { useEffect, useContext, useState, useRef, RefObject } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useAuthChecker from "../hooks/useAuthChecker";
import CanvasDraw from "react-canvas-draw";
declare interface DocumentData {
  reference?: string;
  date?: string;
  data?: string;
  name?: string;
}

export default function DrawnPage() {
  const canvas = useRef() as RefObject<CanvasDraw>;
  useAuthChecker();
  const { uid } = useContext(AuthContext);
  const { id } = useParams();
  const [drawn, setDrawn] = useState<DocumentData>();
  const updateItem = async (getData: string) => {
    const docRef = doc(db, `users/${uid}/drawings`, `${id}`);
    // Set the 'capital' field of the city
    const res = await updateDoc(docRef, {
      data: getData,
    });
  };

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
          <Drawn
            id={id}
            name={drawn.name}
            reference={drawn.reference}
            date={drawn.date}
            data={drawn.data}
            setData={updateItem}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
