import PropTypes from "prop-types";
import React from "react";

const SpeedometerIndicator = ({ label, speed, measureScale }) => {
  return (
    <div className="speedometer-text">
      {label ? <label className="speedometer-label">{label}</label> : null}
      <span className="speedometer-indicator">
        {Math.round(speed * 100) / 100 +
          (measureScale ? " " + measureScale : "")}
      </span>
    </div>
  );
};

SpeedometerIndicator.propTypes = {
  label: PropTypes.string,
  speed: PropTypes.number,
  measureScale: PropTypes.string,
};

export default SpeedometerIndicator;
