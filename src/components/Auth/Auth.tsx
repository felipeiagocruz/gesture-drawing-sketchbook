import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Auth = () => {
  const { login } = useContext(AuthContext);
  return <button onClick={login}>Login</button>;
};

export default Auth;
