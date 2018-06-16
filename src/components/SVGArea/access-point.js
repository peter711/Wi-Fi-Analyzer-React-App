import React from 'react';
import { select } from 'd3';

import * as FSPLCommons from '../../commons/FSPL-commons';

const signalRangeDbm = 80;
const clientGainDbm = 1;

class AccessPoint extends React.Component {

    shouldComponentUpdate(nextProps) {
        const { frequency, gain } = nextProps;
        return this.props.frequency !== frequency 
        || this.props.gain !== gain;
    }

    componentDidMount() {
        drawAccessPoint(this.props)
    }

    componentWillUpdate(nextProps) {
        updateCoverageCircle({
            frequency: nextProps.frequency,
            gain: nextProps.gain,
            updateAccessPointCoords: nextProps.updateAccessPointCoords
        });
    }

    render() {
        return <React.Fragment />
    }
}

export default AccessPoint;

//////////////////////////////////

let coverageCircle;

function drawAccessPoint({ svg, xScale, yScale, frequency, gain, updateAccessPointCoords }) {
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

    updateAccessPointCoords({
        radius: r,
        x: cx,
        y: cy
    });
}

function getMiddleScalePoint(scale) {
    const [min, max] = scale.range();
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

function updateCoverageCircle({ frequency, gain, updateAccessPointCoords }) {
    if (coverageCircle) {
        const newR = FSPLCommons.calculateDistanceInMetersForRange(signalRangeDbm, {
            gainReceiver: clientGainDbm,
            gainTrasmitter: gain,
            frequency
        });

        coverageCircle.attr('r', newR);

        updateAccessPointCoords({
            radius: newR,
            x: Number(coverageCircle.attr('cx')),
            y: Number(coverageCircle.attr('cy'))
        });
    }
} 