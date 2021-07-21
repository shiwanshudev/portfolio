import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
export default function Navbar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="navbar">
      <div className="hamburger" onClick={handleClick}>
        <i className={click ? "bx bx-x" : "bx bx-menu"}></i>
      </div>

      <ul className={click ? "nav-menu open" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            activeClassName="active"
            className="nav-link"
            exact
            to="/"
            onClick={closeMobileMenu}
          >
            <i class="bx bxs-home"></i> Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/skills"
            onClick={closeMobileMenu}
          >
            <i class="bx bxs-book-alt"></i> Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/works"
            onClick={closeMobileMenu}
          >
            <i class="bx bxs-briefcase"></i> Works
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/about"
            onClick={closeMobileMenu}
          >
            <i class="bx bxs-user-rectangle"></i> About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
