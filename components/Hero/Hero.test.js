// @flow

import React from "react";
import { shallow, render } from "enzyme";
import Hero from "./index";

describe("<Hero />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<Hero />)).toMatchSnapshot();
  });

  // it("should render to static HTML", () => {
  //   expect(render(<Hero />).text()).toEqual("");
  // });
});
