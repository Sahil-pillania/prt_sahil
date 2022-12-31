import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import "../styles.css";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightToHidden = 250;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <section>
      {isVisible && (
        <div className="top-btn" onClick={goToButton}>
          <FaArrowUp className="top-btn--icon" />
        </div>
      )}
    </section>
  );
};

export default ScrollTop;
