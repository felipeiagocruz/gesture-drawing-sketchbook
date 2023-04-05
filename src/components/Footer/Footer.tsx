import { createTheme, ThemeProvider } from "@mui/material/styles";
import classes from "./Footer.module.css";
import { Typography } from "@mui/material";

import CoffeeIcon from "@mui/icons-material/Coffee";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Link } from "react-router-dom";

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
  return (
    <footer className={classes.div}>
      <Typography>
        Made with coffe by Felipe Cruz{" "}
        <CoffeeIcon style={{ marginBottom: "-6px" }} />
      </Typography>
      <Typography sx={{ zIndex: "3", marginTop: 0 }}>
        Visit me at{" "}
        <Link to="https://github.com/felipeiagocruz/gesture-drawing-sketchbook">
          <GitHubIcon style={{ marginBottom: "-6px" }} />
        </Link>
        <Link to="https://twitter.com/FelipeICruz">
          <TwitterIcon style={{ marginBottom: "-6px" }} />
        </Link>
        <Link to="https://br.linkedin.com/in/felipe-cruz-b88209155">
          <LinkedInIcon style={{ marginBottom: "-6px" }} />
        </Link>
      </Typography>
    </footer>
  );
};

export default Header;
