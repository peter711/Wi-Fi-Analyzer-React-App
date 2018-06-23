import React from 'react';
import { mount, shallow } from 'enzyme';
import { select } from 'd3';
import * as d3Commons from '../d3-commons';

import AccessPoint from '../access-point';

const boxWidth = 300;
const boxHeight = 300;

const props = {
    xScale: d3Commons.createScale(1000, boxWidth),
    yScale: d3Commons.createScale(1000, boxHeight),
    gain: 4,
    frequency: 2.4,
    updateAccessPointCoords: jest.fn()
}

function createSVGElement() {
    const xmlns = "http://www.w3.org/2000/svg";
    const svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(null, "width", boxWidth);
    svgElem.setAttributeNS(null, "height", boxHeight);
    return svgElem;
}

describe('<AccessPoint/>', () => {
    it('should render', () => {
        const svg = createSVGElement();
        const wrapper = shallow(<AccessPoint
            svg={svg}
            {...props}
        />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should draw 2 circles on SVG', () => {
        const svg = createSVGElement();
        const wrapper = mount(
            <AccessPoint
                svg={svg}
                {...props}
            />
        );

        const d3SVGWrapper = select(svg);
        expect(d3SVGWrapper.selectAll('circle').nodes().length).toBe(2);
    });

    it('should update on scale change', () => {
        const svg = createSVGElement();
        const wrapper = shallow(
            <AccessPoint
                svg={svg}
                {...props}
            />
        );
        const xScale = d3Commons.createScale(1000, 200);
        const yScale = d3Commons.createScale(1000, 200);

        const nextProps = Object.assign(props, { xScale, yScale });
        wrapper.instance().shouldComponentUpdate(nextProps);
    });

});



