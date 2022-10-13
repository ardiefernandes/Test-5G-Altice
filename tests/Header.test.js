import React from "react";
import renderer from "react-test-renderer";
import Header from "./../src/components/Header";

it("correctly renders the header", () => {
  const component = renderer.create(<Header />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
