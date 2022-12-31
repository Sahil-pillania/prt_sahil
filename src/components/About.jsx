import React, { useEffect } from "react";
import "../styles.css";
import linkedIn from "../Images/linkedIn.png";
import leetcode from "../Images/leetcode.png";
import twitter from "../Images/twitter.png";
import gfg from "../Images/gfg.png";
import Button from "@mui/material/Button";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 600,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);
  return (
    <div className="Main-container" name="About">
      <div className="m-4 text-center py-4">
        <h2>About Me:</h2>
      </div>

      <div className=" a">
        <div className="a-left">
          <div className="techs">
            <ul>
              <li
                style={{
                  background: "linear-gradient(45deg, #751818, #5e65eafc)",
                  boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
                }}
              >
                MERN Stack
              </li>
              <li style={{ background: "#03395e", color: "#fff" }}>React js</li>
              <li style={{ background: "#393939", color: "#fff" }}>
                Express js
              </li>
              <li style={{ background: "#7f2d15", color: "#fff" }}>MongoDB</li>
              <li style={{ background: "#74e416", color: "#fff" }}>Node js</li>
              <li style={{ background: "#dab92d", color: "#fff" }}>
                Javascript
              </li>
              <li style={{ background: "#e4b320", color: "#fff" }}>
                EcmaScript standards (ES)
              </li>
              <li style={{ background: "#28a9e1", color: "#fff" }}>CSS</li>
              <li style={{ background: "#cd6799", color: "#fff" }}>SCSS</li>
              <li style={{ background: "#41a0a8", color: "#fff" }}>
                TailwindCSS,
              </li>
              <li style={{ background: "#787cb4", color: "#fff" }}>PHP</li>
              <li style={{ background: "#f1c50b", color: "#fff" }}>OOPS</li>
              <li style={{ background: "#d88700", color: "#fff" }}>mySQL</li>
            </ul>
          </div>
        </div>
        <div className="a-right">
          <div className="links" data-aos="fade-left">
            <div>
              <img src={linkedIn} alt="" title="LinkedIn Id" />
              <a
                href="https://www.linkedin.com/in/sahil-pillania-297a84213/"
                target="_blank"
                rel="noreferrer"
              >
                Visit LinkedIn
              </a>
            </div>
            <div>
              <img src={twitter} alt="" title="Twitter Id" />
              <a
                href="https://twitter.com/SaHiLPiLLaNiA48"
                target="_blank"
                rel="noreferrer"
              >
                Visit Twitter
              </a>
            </div>
            <div>
              <img src={leetcode} alt="" title="LeetCode Id" />
              <a
                href="https://leetcode.com/Sahil_Pillania/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Leetcode
              </a>
            </div>
            <div>
              <img
                src={gfg}
                alt=""
                title="geeksForGeeks Id"
                style={{ borderRadius: "5px" }}
              />
              <a
                href="https://auth.geeksforgeeks.org/user/sahil_pillania"
                target="_blank"
                rel="noreferrer"
              >
                Visit geeksForGeeks
              </a>
            </div>
          </div>
          <div className="download_CV my-4" data-aos="zoom-in">
            <p>You can download my updated CV from below button 👇</p>
            <hr />
            <div className="dwn_cv">
              <a href="../SAHIL CV.pdf" download>
                <Button variant="contained" color="success">
                  Download CV
                </Button>
              </a>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
