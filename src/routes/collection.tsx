import Collection from "../components/Drawings/Collection";
import Add from "../components/Drawings/Add";
import { auth } from "../services/firebase";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function CollectionPage() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user) {
        console.log(user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    setIsLoading(false);
  }, []);
  return (
    <div>
      {!isLoading ? (
        <>
          {isLoggedIn == false ? (
            <Navigate to="/" />
          ) : (
            <>
              <Add />
              <Collection />
            </>
          )}
        </>
      ) : (
        <>
          <p>Loading...</p>
        </>
      )}
    </div>
  );
}
