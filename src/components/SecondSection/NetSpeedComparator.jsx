import React from "react";
import SpeedoMeter from "./SpeedoMeter";

const NetSpeedComparator = () => {
  return (
    <div className="net-speed-comparator">
      <div className="speed-comparator-container">
        <SpeedoMeter
          label="3G"
          size={380}
          lineWidth={12}
          minSpeed={0.1}
          maxSpeed={2}
          measureScale="Mbps"
          range={[0, 1000]}
        />
        <SpeedoMeter
          label="5G"
          size={450}
          lineWidth={15}
          minSpeed={700}
          maxSpeed={1000}
          measureScale="Mbps"
          range={[0, 1000]}
        />
        <SpeedoMeter
          label="4G"
          size={420}
          lineWidth={14}
          minSpeed={400}
          maxSpeed={500}
          measureScale="Mbps"
          range={[0, 1000]}
        />
      </div>
    </div>
  );
};

export default NetSpeedComparator;
