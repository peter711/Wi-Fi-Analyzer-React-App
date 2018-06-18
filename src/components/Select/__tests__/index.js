import React from "react";
import { shallow } from "enzyme";

import Select from "../";

describe("<Select/>", () => {
  it("should render without options", () => {
    const component = shallow(<Select/>);
    expect(component.find('option')).toHaveLength(0);
  });

  it("should render options", () => {
    const options = [
      {value: 'foo', text: 'Foo'},
      {value: 'bar', text: 'Bar'}
    ];

    const component = shallow(<Select options={options}/>);

    const selectOptions = component.find('option');
    expect(selectOptions).toHaveLength(2);
  });

  it("should call onChange", () => {
    const options = [
      {value: 'foo', text: 'Foo'},
      {value: 'bar', text: 'Bar'}
    ];

    const component = shallow(<Select options={options}/>);
    const selectOptions = component.find('option');

    expect(selectOptions).toHaveLength(2);
  });

});
