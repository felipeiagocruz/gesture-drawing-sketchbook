import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function useAuthChecker() {
  const { setAuthState } = useContext(AuthContext);
  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user) {
        console.log(user.uid);
        setAuthState
          ? setAuthState({
              name: user.displayName,
              photo: user.photoURL,
              email: user.email,
              uid: user.uid,
              isLoggedIn: true,
            })
          : null;
      } else {
        setAuthState ? setAuthState({ isLoggedIn: false }) : null;
      }
    });
  }, []);
}
