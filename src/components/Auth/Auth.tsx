import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "@mui/material";

const Auth = () => {
  const { login } = useContext(AuthContext);
  return (
    <Button
      sx={{
        width: 100,
        height: 50,
        borderRadius: 50,
      }}
      color="success"
      variant="contained"
      onClick={login}
    >
      Login
    </Button>
  );
};

export default Auth;
