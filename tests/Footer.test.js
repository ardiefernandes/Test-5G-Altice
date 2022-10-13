import React from "react";
import renderer from "react-test-renderer";
import Footer from "../src/components/Footer";

it("correctly renders the footer", () => {
  const component = renderer.create(<Footer />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
