import React from "react";
import { shallow, mount } from "enzyme";

import RightPane from "../";

jest.mock('./context', () => {
    debugger;
});

describe("<RightPane/>", () => {
    it("should render", () => {
        const component = shallow(<RightPane />);
        expect(component).toMatchSnapshot();
    });

    it("should have state initialized", () => {
        const wrapper = mount(<RightPane/>);
        debugger;
    });
});


