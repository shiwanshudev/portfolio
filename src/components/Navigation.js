import "./Navigation.css";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navigation() {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <React.Fragment>
      {displayMenu && (
        <nav className="navbar">
          <ul>
            <li className="nav-link">
              <a href="#home" onClick={() => setDisplayMenu(!displayMenu)}>
                Home
              </a>
            </li>
            <li className="nav-link">
              <a href="#" onClick={() => setDisplayMenu(!displayMenu)}>
                Skills
              </a>
            </li>
            <li className="nav-link">
              <a href="#projects" onClick={() => setDisplayMenu(!displayMenu)}>
                Projects
              </a>
            </li>
            <li className="nav-link">
              <a href="#" onClick={() => setDisplayMenu(!displayMenu)}>
                About
              </a>
            </li>
            <li className="nav-link">
              <a href="#" onClick={() => setDisplayMenu(!displayMenu)}>
                Contact
              </a>
            </li>
          </ul>
          <span
            className="hamburger"
            style={{ color: "rgb(210, 173, 245)" }}
            onClick={() => setDisplayMenu(!displayMenu)}
          >
            <AiOutlineClose />
          </span>
        </nav>
      )}
      <span className="hamburger" onClick={() => setDisplayMenu(!displayMenu)}>
        <AiOutlineMenu />
      </span>
    </React.Fragment>
  );
}
