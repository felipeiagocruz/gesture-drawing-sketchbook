import { createTheme, ThemeProvider } from "@mui/material/styles";
import Auth from "../Auth/Auth";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { Button } from "@mui/material";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0971f1",
    },
    success: {
      main: "#d1e751",
    },
  },
});

const Header = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className={classes.div}>
      <ThemeProvider theme={theme}>
        <div className={classes.items}>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            <Button
              sx={{
                width: 140,
                height: 50,
                borderRadius: 50,
                textDecoration: "none",
              }}
              color="success"
              variant="contained"
            >
              Home
            </Button>
          </Link>

          {isLoggedIn && (
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/mydrawings"
            >
              <Button
                sx={{
                  width: 140,
                  height: 50,
                  borderRadius: 50,
                  textDecoration: "none",
                }}
                color="success"
                variant="contained"
              >
                My drawings
              </Button>
            </Link>
          )}

          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/aboutus"
          >
            <Button
              sx={{
                width: 140,
                height: 50,
                borderRadius: 50,
                textDecoration: "none",
              }}
              color="success"
              variant="contained"
            >
              About us
            </Button>
          </Link>
        </div>
        <div className={classes.divLogin}>
          <Auth />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Header;
