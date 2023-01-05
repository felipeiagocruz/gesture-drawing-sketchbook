import Collection from "../components/Drawings/Collection";
import Add from "../components/Drawings/Add";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useAuthChecker from "../hooks/useAuthChecker";

export default function CollectionPage() {
  useAuthChecker();
  const { isLoggedIn, setAuthState, name, photo, email } =
    useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    // setAuthState(authState || {isLoggedIn:false})

    setIsLoading(false);
  }, []);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <>
            <Add />
            <p>aaaa{name}</p>
            <Collection />
          </>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
