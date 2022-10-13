import React from "react";
import ContactForm from "./ContactForm";

const ThirdSection = () => {
  return (
    <section className="third-section">
      <h2 aria-label="Gaming, filmes, series e mais, todo o entretenimento com o conforto de casa, na palma da tua mão">
        Quere saber mais?
        <br />
        Deixe seus dados e entramos em contacto consigo
      </h2>
      <ContactForm />
    </section>
  );
};

export default ThirdSection;
