// @flow

import React from "react";
import { shallow, render } from "enzyme";
import PostList from "./index";

describe("<PostList />", () => {
  it("should match existing snapshot", () => {
    expect(shallow(<PostList />)).toMatchSnapshot();
  });

  // it("should render to static HTML", () => {
  //   expect(render(<PostList />).text()).toEqual("");
  // });
});
