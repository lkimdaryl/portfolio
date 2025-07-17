import "./navigation.css";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleClick = (e: { preventDefault: () => void }, path: string) => {
    e.preventDefault();
    navigate(path); // Navigate to the target path
  };

  return (
    <nav>
      <img src="lk-logo.png" id="logo" alt="kl-logo" />
      <ul>
        <li>
          <a
            href="#"
            id={location.pathname === "/" ? "curPage" : ""}
            onClick={(e) => handleClick(e, "/")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            id={location.pathname === "/about" ? "curPage" : ""}
            onClick={(e) => handleClick(e, "/about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            id={location.pathname === "/work" ? "curPage" : ""}
            onClick={(e) => handleClick(e, "/work")}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="#"
            id={location.pathname === "/project" ? "curPage" : ""}
            onClick={(e) => handleClick(e, "/project")}
          >
            Projects
          </a>
        </li>
        {/* <li><a href="/resume.pdf" target="_blank">Resume</a></li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
