import React from "react";
import NetSpeedComparator from "./NetSpeedComparator";
import PromotionalVideo from "./PromotionalVideo";

const SecondSection = () => {
  return (
    <section className="second-section">
      <h2 aria-label="Gaming, filmes, series e mais, todo o entretenimento com o conforto de casa, na palma da tua mão">
        Gaming, filmes, series e mais, todo o entretenimento com o conforto de
        casa...
        <br />
        Na palma da tua mão
      </h2>
      <PromotionalVideo />
      <NetSpeedComparator />
    </section>
  );
};

export default SecondSection;
