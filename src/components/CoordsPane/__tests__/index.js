import React from "react";
import { shallow, mount } from "enzyme";

import CoordsPane from "../";

beforeEach(() => {
    jest.resetModules();
});

export const mockedContext = {
    txPower: -6,
    radio: 5,
    updateAccessPoint: jest.fn()
}

export const getCoordsPaneWithContext = (context = mockedContext) => {
    jest.doMock('../../../context', () => {
        return {
            Consumer: props => props.children(context)
        }
    });

    return require('../').default;
};

describe("CoordPane/>", () => {

    it("should render", () => {
        const CoordsPane = getCoordsPaneWithContext();
        const component = mount(<CoordsPane/>);
    });

    it("should be initialized with context", () => {
        const CoordsPane = getCoordsPaneWithContext();
        const component = shallow(<CoordsPane/>).dive();
        expect(component).toMatchSnapshot();
        expect(component.props()).toEqual({
            radio: mockedContext.radio,
            txPower: mockedContext.txPower
        });
    });

});