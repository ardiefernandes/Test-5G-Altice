import React from "react";
import renderer from "react-test-renderer";
import SpeedoMeter from "../src/components/SecondSection/SpeedoMeter";

it("correctly renders the speedometer for 3G", () => {
  const component = renderer.create(
    <SpeedoMeter
      label="3G"
      size={380}
      lineWidth={12}
      minSpeed={0.1}
      maxSpeed={2}
      measureScale="Mbps"
      range={[0, 1000]}
      test={true}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("correctly renders the speedometer for 4G", () => {
  const component = renderer.create(
    <SpeedoMeter
      label="4G"
      size={420}
      lineWidth={14}
      minSpeed={400}
      maxSpeed={500}
      measureScale="Mbps"
      range={[0, 1000]}
      test={true}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("correctly renders the speedometer for 5G", () => {
  const component = renderer.create(
    <SpeedoMeter
      label="5G"
      size={450}
      lineWidth={15}
      minSpeed={700}
      maxSpeed={1000}
      measureScale="Mbps"
      range={[0, 1000]}
      test={true}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
