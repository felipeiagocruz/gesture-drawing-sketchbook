import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "@mui/material";

const Auth = () => {
  const { login } = useContext(AuthContext);
  return (
    <Button variant="contained" onClick={login}>
      Login
    </Button>
  );
};

export default Auth;
