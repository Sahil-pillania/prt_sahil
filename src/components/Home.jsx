import React from "react";
import "../styles.css";

const Home = () => {
  return (
    <div className="Main-container H">
      <div className="H-left">
        <div className="content">
          <h2 className="H-intro">Hello, My name is </h2>
          <h1 className="H-name">Sahil Pillania</h1>
          <div className="H-title">
            <div className="H-title-wrapper">
              <div className="H-title-item">Web Developer</div>
              <div className="H-title-item">MERN Stack Developer</div>
              <div className="H-title-item">React Developer</div>
              <div className="H-title-item">Full Stack Developer</div>
            </div>
          </div>
          <p className="H-desc">
            Software developer with a proven ablity to adapt in both
            self-starting and collaborative environments while staying focused
            on achieving high-quality results under strict deadlines.
          </p>
        </div>
      </div>
      <div className="H-right">
        <img src="./logo192.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
