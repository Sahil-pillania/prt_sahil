import React from "react";
import "../styles.css";
//import { NavLink } from "react-router-dom";
import logo2 from "../Images/logo2.png";
import { useLocation } from "react-router-dom";
var { Link } = require("react-scroll");

const NavBar = () => {
  const style = {
    border: "none !important",
    borderTop: "0px solid transparent",
    borderBottom: " 0px solid transparent",
  };

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  const location = useLocation();
  const { pathname } = location;
  // console.log(pathname);
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
        <div className="container-fluid mx-4" style={{ background: "#212529" }}>
          <Link className="navbar-brand" style={style} to="/prt_sahil">
            <img src={logo2} alt="logo" className="N-logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarid"
            aria-controls="navbarid"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarid">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {links.map(({ link, id, idx }) => {
                return (
                  <li
                    key={id}
                    className={`${
                      pathname === { link } ? "active" : ""
                    } nav-item`}
                  >
                    {/* // also used navbar toggle classes here  */}
                    <Link
                      className="nav-link "
                      id=""
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarid"
                      aria-controls="navbarid"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      to={link}
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
