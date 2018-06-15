import React from 'react';
import { select } from 'd3';

const AccessPoint = (props) => {
    drawAccessPoint(props)
    return <React.Fragment/>
}

export default AccessPoint;

//////////////////////////////////

function drawAccessPoint({ svg, xScale, yScale }) {
    const groupElement = select(svg).append('g');

    const cx = getMiddleScalePoint(xScale);
    const cy = getMiddleScalePoint(yScale);
    
    appendCoverageCircle({ element: groupElement, cx, cy });
    appendInnerCircle({ element: groupElement, cx, cy });
}

function getMiddleScalePoint(scale) {
    const [ min, max ]  = scale.range();
    return (max - min) / 2;
}

function appendInnerCircle({ element, cx, cy }) {
    element.append('circle')
    .attr('cx', cx)
    .attr('cy', cy)
    .attr('r', 25)
    .attr('fill', 'grey');
}

function appendCoverageCircle({ element, cx, cy }) {
    element.append('circle')
    .attr('cx', cx)
    .attr('cy', cy)
    .attr('r', 60)
    .attr('fill', 'rgba(68, 137, 244, 0.4)')
}