import React from "react";
import { shallow } from "enzyme";

import Separator from "../";

describe("<Separator/>", () => {
    it("should render", () => {
        const component = shallow(<Separator/>);
        expect(component).toMatchSnapshot();
    })
});


