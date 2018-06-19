import React from "react";
import { shallow } from "enzyme";

import Button from '../';

describe("<Button/>", () => {
    it("should render", () => {
        const component = shallow(<Button/>);
        expect(component).toMatchSnapshot();
    });

    it("should have text", () => {
        const text = "example text";
        const component = shallow(<Button text={text}/>);
        expect(component.find('button').text()).toEqual(text);
        expect(component).toMatchSnapshot();
    });

    it("should call onChange", () => {
        const onClick = jest.fn();
        const component = shallow(<Button onClick={onClick}/>);

        component.find('button').simulate('click');

        expect(onClick).toBeCalled();
    });
});