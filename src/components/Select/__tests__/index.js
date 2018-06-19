import React from "react";
import { shallow } from "enzyme";

import Select from "../";

const options = [
  { value: 'foo', text: 'Foo' },
  { value: 'bar', text: 'Bar' }
];

describe("<Select/>", () => {
  it("should render without options", () => {
    const component = shallow(<Select />);
    expect(component).toMatchSnapshot();
  });

  it("should render options", () => {
    const component = shallow(<Select options={options} />);

    const selectOptions = component.find('option');
    expect(selectOptions).toHaveLength(2);

    expect(component).toMatchSnapshot();
  });

  it("should call onChange", () => {
    const value = 'bar';
    const onChange = jest.fn();
    const component = shallow(<Select onChange={onChange} options={options}/>);
    expect(component).toMatchSnapshot();

    component.find('select').simulate('change', {
      target: { value }
    });

    expect(onChange).toBeCalledWith(value);
  });

  it("should have label", () => {
    const label = 'Test label';
    const component = shallow(<Select label={label}/>);

    expect(component.find('label').text()).toEqual(label);
    expect(component).toMatchSnapshot();
  });
});
