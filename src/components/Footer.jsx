import React from "react";

const Footer = () => {
  return (
    <div
      className="f"
      // style={{
      //   backgroundColor: darkMode ? "black" : "White",
      //   color: darkMode && "white",
      // }}
    >
      <div className="f-auth">
        Copyright &copy; Sahil Pillania - {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
