// @flow

import React from "react";
import { shallow, render } from "enzyme";
import Post from "./index";

describe("<Post />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<Post />)).toMatchSnapshot();
  });

  // it("should render to static HTML", () => {
  //   expect(render(<Post />).text()).toEqual("");
  // });
});
