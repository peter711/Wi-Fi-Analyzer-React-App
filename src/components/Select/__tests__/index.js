import React from "react";
import { shallow } from "enzyme";

import Select from "../";

describe("<Select/>", () => {
  it("should render without options", () => {
    const component = shallow(<Select/>);
  });

  it("should render", () => {});
});
