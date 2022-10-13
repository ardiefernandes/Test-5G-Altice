import React from "react";
import Banner from "../assets/MEO 5G Banner.png";

const FirstSection = () => {
  return (
    <section className="first-section">
      <h1 aria-label="A evolução tecnológica que levas contigo">
        A EVOLUÇÃO tecnológica que levas contigo
      </h1>
      <img alt="meo 5G" src={Banner} />
    </section>
  );
};

export default FirstSection;
