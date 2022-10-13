import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef } from "react";

const SpeedoMeterMarker = ({ radius = 45, lineWidth = 4, value }) => {
  const canvasRef = useRef();
  const circle = useRef({
    canvas: null,
    context: null,
    x: 0,
    y: 0,
    radius,
    start: Math.PI / 1.5,
    end: Math.PI * 1.65,
  });

  useEffect(() => {
    try {
      if (!circle.current.canvas) {
        circle.current.canvas = canvasRef.current;
        circle.current.context = circle.current.canvas.getContext("2d");

        const gradient = circle.current.context.createLinearGradient(
          0,
          radius * 2,
          0,
          0
        );

        gradient.addColorStop(0, "red");
        gradient.addColorStop(0.5, "yellow");
        gradient.addColorStop(1, "#3282F9");
        circle.current.x = circle.current.canvas.width / 2;
        circle.current.y = circle.current.canvas.height / 2;
        circle.current.context.lineWidth = lineWidth;
        circle.current.context.strokeStyle = gradient;
        circle.current.context.shadowOffsetX = 0;
        circle.current.context.shadowOffsetY = 0;
        circle.current.context.shadowBlur = lineWidth * 10;
        circle.current.context.shadowColor = gradient;
      }

      drawCircle(value);
    } catch (e) {
      // Jest doesn't supports canvas snapshots, so exceptions
      // need to be caught when it makes a snapshot and tries to
      // perform the code above to draw the canvas circle
    }
  }, [value]);

  const drawCircle = useCallback((value) => {
    const end = value
      ? (value * circle.current.end) / 100
      : circle.current.start;

    circle.current.context.clearRect(
      0,
      0,
      circle.current.canvas.width,
      circle.current.canvas.height
    );
    circle.current.context.beginPath();
    circle.current.context.arc(
      circle.current.x,
      circle.current.y,
      circle.current.radius,
      circle.current.start,
      end > circle.current.start ? end : circle.current.start,
      false
    );

    circle.current.context.stroke();
  });

  return (
    <canvas
      ref={canvasRef}
      width={radius * 2 + lineWidth + 6}
      height={radius * 2 + lineWidth + 6}
    ></canvas>
  );
};

SpeedoMeterMarker.propTypes = {
  radius: PropTypes.number,
  lineWidth: PropTypes.number,
  value: PropTypes.number,
};

export default SpeedoMeterMarker;
