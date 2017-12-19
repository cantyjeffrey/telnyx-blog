// @flow

import React from "react";
import { shallow, render } from "enzyme";
import Comments from "./index";

describe("<Comments />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<Comments />)).toMatchSnapshot();
  });

  // it("should render to static HTML", () => {
  //   expect(render(<Comments />).text()).toEqual("");
  // });
});
