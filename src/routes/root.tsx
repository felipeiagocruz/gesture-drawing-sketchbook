import App from "../App";
import Auth from "../components/Auth/Auth";
import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Auth />
      <Link to="/collection">Collection</Link>
      <App />
    </>
  );
}
