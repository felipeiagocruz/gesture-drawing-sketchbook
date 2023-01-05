import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import {
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../services/firebase";

export declare interface Auth {
  name?: string | null;
  email?: string | null;
  photo?: string | null;
  login?: () => void;
  setAuthState?: Dispatch<SetStateAction<Auth>>;
  isLoggedIn?: boolean;
  children?: ReactNode;
}

export const AuthContext = createContext({} as Auth);

const AuthProvider: React.FC<Auth> = ({ children }) => {
  const [authState, setAuthState] = useState<Auth>({});
  const provider = new GoogleAuthProvider();

  function login() {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (credential) {
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              setAuthState({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                isLoggedIn: true,
                setAuthState: setAuthState,
              });
              // ...
            }
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <AuthContext.Provider
      value={{
        login,
        name: authState.name,
        photo: authState.photo,
        email: authState.email,
        isLoggedIn: authState.isLoggedIn,
        setAuthState: setAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
