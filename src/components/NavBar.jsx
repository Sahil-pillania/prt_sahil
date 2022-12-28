import React from "react";
import "../styles.css";
import { NavLink } from "react-router-dom";
import logo2 from "../Images/logo2.png";

const NavBar = () => {
  const darkMode = true;
  return (
    <div className="N">
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? `navbar-dark bg-dark` : `navbar-light bg-light`
        } `}
        // style={{
        //   backgroundColor: darkMode ? "black !important" : "white",
        //   color: darkMode ? "white !important" : "black !important",
        // }}
      >
        <div className="container-fluid mx-4">
          <NavLink className="navbar-brand" to="/">
            <img src={logo2} alt="logo" className="N-logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ml-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/portfolio-sahil"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
