// @flow

import React from "react";
import { shallow, render } from "enzyme";
import Comment from "./index";

describe("<Comment />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<Comment />)).toMatchSnapshot();
  });

  // it("should render to static HTML", () => {
  //   expect(render(<Comment />).text()).toEqual("");
  // });
});
