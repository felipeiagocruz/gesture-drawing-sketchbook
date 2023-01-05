import Collection from "../components/Drawings/Collection";
import Add from "../components/Drawings/Add";
import { auth } from "../services/firebase";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function CollectionPage() {
  const { isLoggedIn, setAuthState, name, photo, email } =
    useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, function (user) {
      if (user) {
        console.log(user);
        setAuthState
          ? setAuthState({
              name: user.displayName,
              photo: user.photoURL,
              email: user.email,
              isLoggedIn: true,
            })
          : null;
        setIsLoading(false);
      } else {
        setAuthState ? setAuthState({ isLoggedIn: false }) : null;
        setIsLoading(false);
      }
    });
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
              <p>aaaa{name}</p>
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
