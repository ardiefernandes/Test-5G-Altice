import React from "react";
import renderer from "react-test-renderer";
import PromotionalVideo from "../src/components/SecondSection/PromotionalVideo";

it("correctly renders the second section promotional video", () => {
  const component = renderer.create(<PromotionalVideo />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
