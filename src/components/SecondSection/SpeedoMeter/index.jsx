import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef, useState } from "react";
import SpeedometerIndicator from "./SpeedometerIndicator";
import SpeedoMeterMarker from "./SpeedoMeterMarker";
import SpeedoMeterPlaceholder from "./SpeedoMeterPlaceholder";

const SpeedoMeter = ({
  label = "",
  size = 120,
  lineWidth = 4,
  minSpeed = 0,
  maxSpeed = 100,
  measureScale = "",
  range = [0, 100],
  // flag added to avoid non-stop recursivity during the tests
  test = false,
}) => {
  const timeoutRef = useRef();
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    if (!test) {
      randomSpeed();
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const randomSpeed = useCallback(() => {
    const difference = maxSpeed - minSpeed;
    const rand = Math.random();

    setSpeed(minSpeed + rand * difference);

    if (!test) {
      timeoutRef.current = setTimeout(() => randomSpeed(), 500);
    }
  });

  return (
    <div
      className="speedometer"
      style={{ height: size + 10, width: size + 10 }}
    >
      <SpeedometerIndicator
        label={label}
        speed={speed}
        measureScale={measureScale}
      />
      <SpeedoMeterPlaceholder radius={size / 2} lineWidth={lineWidth} />
      <SpeedoMeterMarker
        value={(speed / (range[1] - range[0])) * 100}
        radius={size / 2}
        lineWidth={lineWidth}
      />
    </div>
  );
};

SpeedoMeter.propTypes = {
  label: PropTypes.string,
  size: PropTypes.number,
  lineWidth: PropTypes.number,
  minSpeed: PropTypes.number,
  maxSpeed: PropTypes.number,
  measureScale: PropTypes.string,
  range: PropTypes.array,
  test: PropTypes.bool,
};

export default SpeedoMeter;
