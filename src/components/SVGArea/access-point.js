import React from 'react';
import { select } from 'd3';

import * as FSPLCommons from '../../commons/FSPL-commons';

const signalRangeDbm = 80;
const clientGainDbm = 1;

class AccessPoint extends React.PureComponent {
    
    componentDidMount() {
        drawAccessPoint(this.props)
    }

    componentWillUpdate(nextProps) {
        updateCoverageCircle({
            frequency: nextProps.frequency,
            gain: nextProps.gain
        });
    }
    
    render() {
        return <React.Fragment/>
    }
}

export default AccessPoint;

//////////////////////////////////

let coverageCircle;

function drawAccessPoint({ svg, xScale, yScale, frequency, gain }) {
    const groupElement = select(svg).append('g');

    const cx = getMiddleScalePoint(xScale);
    const cy = getMiddleScalePoint(yScale);
    const r = FSPLCommons.calculateDistanceInMetersForRange(signalRangeDbm, { 
        gainReceiver: clientGainDbm,
        gainTrasmitter: gain,
        frequency
    });

    appendCoverageCircle({ element: groupElement, cx, cy, r });
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
    .attr('r', 5)
    .attr('fill', 'grey');
}

function appendCoverageCircle({ element, cx, cy, r }) {
    coverageCircle = element.append('circle')
    .attr('cx', cx)
    .attr('cy', cy)
    .attr('r', r)
    .attr('fill', 'rgba(68, 137, 244, 0.4)')
}

function updateCoverageCircle({ frequency, gain }) {
    if (coverageCircle) {
        const newR = FSPLCommons.calculateDistanceInMetersForRange(signalRangeDbm, { 
            gainReceiver: clientGainDbm,
            gainTrasmitter: gain,
            frequency
        });

        coverageCircle.attr('r', newR);
    }
} 