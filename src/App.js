import "./styles.css";
//import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
//import Error from "./components/Error";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ScrollTop from "./components/ScrollTop";

function App() {
  const style = {
    margin: 0,
    padding: 0,
    background: "black",
  };

  return (
    <>
      <div className={{ style }}>
        <NavBar />
        <ScrollTop />
        <Home />
        <About />
        <Projects />
        <Contact />
        {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Routes> */}

        <Footer />
      </div>
    </>
  );
}

export default App;
