import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";

const SpeedoMeterPlaceholder = ({
  radius = 45,
  lineWidth = 4,
  start = Math.PI / 1.5,
  end = Math.PI * 1.65,
}) => {
  const canvasRef = useRef();

  useEffect(() => {
    try {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      context.lineWidth = lineWidth;
      context.strokeStyle = "#A8A8A8";
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = 3;
      context.shadowColor = "#A8A8A8";

      context.beginPath();
      context.arc(
        canvas.width / 2,
        canvas.height / 2,
        radius,
        start,
        end,
        false
      );
      context.stroke();
    } catch (e) {
      // Jest doesn't supports canvas snapshots, so exceptions
      // need to be caught when it makes a snapshot and tries to
      // perform the code above to draw the canvas circle
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={radius * 2 + lineWidth + 6}
      height={radius * 2 + lineWidth + 6}
    ></canvas>
  );
};

SpeedoMeterPlaceholder.propTypes = {
  radius: PropTypes.number,
  lineWidth: PropTypes.number,
  start: PropTypes.number,
  end: PropTypes.number,
};

export default memo(SpeedoMeterPlaceholder);
