import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Button, Avatar } from "@mui/material";

const Auth = () => {
  const { isLoggedIn, login, name, photo } = useContext(AuthContext);
  return (
    <>
      {isLoggedIn ? (
        <Button
          sx={{
            width: 200,
            height: 50,
            borderRadius: 50,
          }}
          color="success"
          variant="contained"
          onClick={login}
        >
          <Avatar
            alt={name || "Undefined"}
            sx={{ marginRight: 3 }}
            src={
              photo ||
              "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fperson_2815428&psig=AOvVaw1qv1qZ6GZaBjCCnLBMGDlZ&ust=1680800313823000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjWkJ-bk_4CFQAAAAAdAAAAABAE"
            }
          />
          {name}
        </Button>
      ) : (
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
      )}
    </>
  );
};

export default Auth;
