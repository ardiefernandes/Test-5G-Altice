import React from "react";
import renderer from "react-test-renderer";
import FirstSection from "../src/components/FirstSection";

it("correctly renders the page first section", () => {
  const component = renderer.create(<FirstSection />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
