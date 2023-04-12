import Collection from "../components/Drawings/Collection";
import Add from "../components/Drawings/Add";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import classes from "./collection.module.css";

import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useAuthChecker from "../hooks/useAuthChecker";
import { Navigate } from "react-router-dom";

export default function CollectionPage() {
  useAuthChecker();
  const { isLoggedIn, setAuthState, name, photo, email } =
    useContext(AuthContext);

  return (
    <div className={classes.div}>
      {isLoggedIn ? (
        <>
          <>
            <Header />
            <Add />
            <p>{name}</p>
            <Collection />
            <Footer />
          </>
        </>
      ) : (
        <>{name == null ? <Navigate to="/" /> : <p>Loading...</p>}</>
      )}
    </div>
  );
}
