import React from "react";
import { shallow } from "enzyme";

import Radio from "../";

const options = [
    { value: 'foo', text: 'Foo' },
    { value: 'bar', text: 'Bar' }
];

describe("<Radio/>", () => {
    it("should render", () => {
        const component = shallow(<Radio />);
        expect(component).toMatchSnapshot();
    });

    it("should render radio options", () => {
        const component = shallow(<Radio options={options} />);
        expect(component.find('input')).toHaveLength(2);
        expect(component).toMatchSnapshot();
    });

    it("should call onChange", () => {
        const value = 'bar';
        const onChange = jest.fn();
        const component = shallow(<Radio onChange={onChange} options={options} />);

        expect(component).toMatchSnapshot();
        component.find('input').at(1).simulate('change', {
            target: { value }
        });

        expect(onChange).toBeCalledWith(value);
    });
});