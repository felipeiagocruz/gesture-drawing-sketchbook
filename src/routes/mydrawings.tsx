import Collection from "../components/Drawings/Collection";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Board from "../components/Layout/Board";
import WhiteBoard from "../components/Layout/WhiteBoard";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useAuthChecker from "../hooks/useAuthChecker";
import { Navigate } from "react-router-dom";

export default function CollectionPage() {
  useAuthChecker();
  const { isLoggedIn, setAuthState, name, photo, email } =
    useContext(AuthContext);

  return (
    <Board>
      {isLoggedIn ? (
        <>
          <Header />
          <WhiteBoard>
            <Collection />
          </WhiteBoard>
          <Footer />
        </>
      ) : (
        <>{name == null ? <Navigate to="/" /> : <p>Loading...</p>}</>
      )}
    </Board>
  );
}
