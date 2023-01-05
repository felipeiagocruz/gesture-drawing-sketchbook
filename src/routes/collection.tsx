import Collection from "../components/Drawings/Collection";
import Add from "../components/Drawings/Add";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useAuthChecker from "../hooks/useAuthChecker";
import { Navigate } from "react-router-dom";

export default function CollectionPage() {
  useAuthChecker();
  const { isLoggedIn, setAuthState, name, photo, email } =
    useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <>
            <Add />
            <p>{name}</p>
            <Collection />
          </>
        </>
      ) : (
        <>{name == null ? <Navigate to="/" /> : <p>Loading...</p>}</>
      )}
    </div>
  );
}
