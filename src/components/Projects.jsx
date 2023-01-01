import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      offset: 190,
      duration: 600,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);
  const projects = [
    {
      id: 1,
      name: "MERN login system",
      tech: "MERN Stack",
      link: "https://sahilmernapps.herokuapp.com/",
    },
    {
      id: 2,
      name: "Assessment Management System(AMS)",
      tech: "JavaScript and PHP",
      link: "https://assessmentmanagementsys.000webhostapp.com/",
    },
    {
      id: 3,
      name: "ChatApp using PHP",
      tech: "JavaScript and PHP",
      link: "https://chatmanialite.000webhostapp.com/index.php",
    },
    {
      id: 4,
      name: " Cars game ",
      tech: "JavaScript",
      link: "https://sahil-pillania.github.io/Cars_Game_Vanilla_javascipt/",
    },
    {
      id: 5,
      name: " PostMan Lite",
      tech: "JavaScript",
      link: "https://github.com/Sahil-pillania/PostMan-lite",
    },
    {
      id: 6,
      name: " React App ",
      tech: "React Js",
      link: "https://sahilpillania.netlify.app/",
    },
    {
      id: 7,
      name: "https://sahilpillania.netlify.app/",
      tech: "https://sahilpillania.netlify.app/",
      link: "https://sahil-pillania.github.io/React_todo_App/",
    },
    {
      id: 8,
      name: "Some static websites.",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/Sahil-pillania/",
    },
    {
      id: 9,
      name: " E-Commerce app ",
      tech: " E-Commerce app ",
      link: "https://github.com/Sahil-pillania/DressesWorld_E-Commerce-App_NextJS",
    },
  ];

  return (
    <div name="Projects">
      <div className="Main-container">
        <div className="pro_name mx-auto text-center my-3">
          <h3>Projects </h3>
        </div>
        <div className=" container " data-aos="fade-right">
          <div className="table-responsive-sm table-responsive-md">
            <table className="table table-hover table-dark rounded-3">
              <caption>
                List of some projects. For more checkout my
                <a
                  href="https://github.com/Sahil-Pillania"
                  target="_blank"
                  className="ms-2"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Github Account
                </a>
                .
              </caption>
              <thead>
                <tr>
                  <th scope="col">SNo.</th>
                  <th scope="col">Project Name</th>
                  <th scope="col">Technologies Used</th>
                  <th scope="col">Live preview Links</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((items, i) => {
                  return (
                    <tr key={items.id}>
                      <th scope="row">{items.id}</th>
                      <td>{items.name}</td>
                      <td>{items.tech}</td>
                      <td>
                        <a
                          style={{ textDecoration: "none", color: "#fff" }}
                          href={items.link}
                        >
                          {items.link}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
