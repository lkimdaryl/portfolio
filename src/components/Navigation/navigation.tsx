import "./navigation.css";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation(); // Get the current location

  return (
    <nav>
      <img src="lk-logo.png" id="logo" alt="kl-logo" />
      <ul>
        <li><Link to="/" id={location.pathname === "/" ? "curPage" : ""}>Home</Link></li>
        <li><Link to="/about" id={location.pathname === "/about" ? "curPage" : ""}>About</Link></li>
        <li><Link to="/work" id={location.pathname === "/work" ? "curPage" : ""}>Work</Link></li>
        <li><Link to="/project" id={location.pathname === "/project" ? "curPage" : ""}>Projects</Link></li>
      </ul>
    </nav>
  )
};

export default Navigation;
