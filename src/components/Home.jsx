import React, { useEffect } from "react";
import "../styles.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import image from "../Images/home.gif";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);

  return (
    <div className="Main-container H">
      <div className="H-left">
        <div className="content">
          <h2 data-aos="fade-right" className="H-intro">
            Hello, My name is
          </h2>
          <h1 data-aos="fade-left" className="H-name">
            Sahil Pillania
          </h1>
          <div className="H-title ">
            <div className="H-title-wrapper">
              <div className="H-title-item">Web Developer</div>
              <div className="H-title-item">MERN Stack Developer</div>
              <div className="H-title-item">React Developer</div>
              <div className="H-title-item">Full Stack Developer</div>
            </div>
          </div>
          <p className="H-desc " data-aos="fade-up">
            Software developer with a proven ablity to adapt in both
            self-starting and collaborative environments while staying focused
            on achieving high-quality results under strict deadlines.
          </p>
        </div>
      </div>
      <div className="H-right">
        <img src={image} alt="" width={122} />
      </div>
    </div>
  );
};

export default Home;
