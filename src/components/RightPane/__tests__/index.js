import React from "react";
import { shallow, mount } from "enzyme";

import RightPane from "../";

beforeEach(() => {
    jest.resetModules();
});

export const mockedContext = {
    txPower: -6,
    radio: 5,
    updateAccessPoint: jest.fn()
}

export const getRightPaneWithContext = (context = mockedContext) => {
    jest.doMock('../../../context', () => {
        return {
            Consumer: props => props.children(context)
        }
    });

    return require('../').default;
};

describe("<RightPane/>", () => {
    it("should render", () => {
        const component = shallow(<RightPane />);
        expect(component).toMatchSnapshot();
    });

    it("select value should be initialized by context", () => {
        const RightPane = getRightPaneWithContext();
        const wrapper = mount(<RightPane />);
        expect(wrapper.find('select').props().value).toBe(mockedContext.txPower);
    });

    it("radio should be initialized by context", () => {
        const RightPane = getRightPaneWithContext();
        const wrapper = mount(<RightPane />);
        expect(wrapper.find('input[type="radio"]').get(1).props.checked).toBe(true);
    });

    it("updateAccessPoint should be called on save click", () => {
        const RightPane = getRightPaneWithContext();
        const wrapper = mount(<RightPane />);
        wrapper.find('button.primary').simulate('click');
        expect(mockedContext.updateAccessPoint).toBeCalled();
    });

    it("updateAccessPoint should be called on cancel click", () => {
        const RightPane = getRightPaneWithContext();
        const wrapper = mount(<RightPane />);
        wrapper.find('button').at(1).simulate('click');
        expect(mockedContext.updateAccessPoint).toBeCalled();
    });

    it("cancel click should revert previous saved state", () => {
        const RightPane = getRightPaneWithContext();
        const wrapper = mount(<RightPane />);

        //Change TX power to -16
        wrapper.find('select').simulate('change', { target: { value: "-16" }});

        //Change Radio to 2.4GHz
        wrapper.find('input[type="radio"]').at(0).simulate('change', { target: { value: "2.4" }});

        //Clicking save
        wrapper.find('button.primary').simulate('click');
        
        //Clicking cancel
        wrapper.find('button').at(1).simulate('click');

        //Verify if values have been restored
        expect(wrapper.find('select').props().value).toBe(mockedContext.txPower);
        expect(wrapper.find('input[type="radio"]').get(1).props.checked).toBe(true);
    });
});


