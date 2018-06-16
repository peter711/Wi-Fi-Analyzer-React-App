import React from 'react';
import { select, drag, event, transition } from 'd3';
import * as d3Commons from './d3-commons';
import * as FSPLCommons from '../../commons/FSPL-commons';

const signalRangeDbm = 80;
const clientGainDbm = 1;

let coverageCircle;
let innerCircle;

class AccessPoint extends React.Component {

    shouldComponentUpdate(nextProps) {
        const { frequency, gain, yScale, xScale } = nextProps;
        
        if (this.props.yScale !== yScale || this.props.xScale !== xScale) {
            onScaleUpdate({
                yScale: this.props.yScale,
                xScale: this.props.xScale
            },{
                yScale,
                xScale
            });
        }

        return this.props.frequency !== frequency
            || this.props.gain !== gain;
    }

    componentDidMount() {
        drawAccessPoint(this.props);
        createDragBehaviour(this.props);
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
    innerCircle = element.append('circle')
        .attr('cx', cx)
        .attr('cy', cy)
        .attr('r', 10)
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

        coverageCircle
            .transition()
            .duration(500)
            .attr('r', newR);

        updateAccessPointCoords({
            radius: newR,
            x: Number(coverageCircle.attr('cx')),
            y: Number(coverageCircle.attr('cy'))
        });
    }
}

function createDragBehaviour({ updateAccessPointCoords, xScale, yScale }) {
    if (innerCircle) {
        innerCircle.call(
            drag()
                .on('drag', onDrag.bind(this, updateAccessPointCoords, xScale, yScale))
        );
    }
}

function onDrag(updateAccessPointCoords, xScale, yScale) {
    if (coordsInRange(event, xScale, yScale)) {
        const { x, y } = event;
        const radius = Number(coverageCircle.attr('r'));

        updateElementsPositionOnDrag({
            cx: x,
            cy: y
        });

        updateAccessPointCoords({
            radius,
            x,
            y
        });
    }
}

function coordsInRange({ x, y }, xScale, yScale) {
    const [minX, maxX] = xScale.range();
    const [minY, maxY] = yScale.range();

    return x >= minX
        && x <= maxX
        && y >= minY
        && y <= maxY;
}

function updateElementsPositionOnDrag({ cx, cy }) {
    innerCircle
        .attr('cx', cx)
        .attr('cy', cy);

    coverageCircle
        .attr('cx', cx)
        .attr('cy', cy);
}

function onScaleUpdate(oldScales, newScales) {
    const xRatio = d3Commons.calculateTransformRangeRation(oldScales.xScale, newScales.xScale);
    const yRatio = d3Commons.calculateTransformRangeRation(oldScales.yScale, newScales.yScale);
    const innerCircleCX = +innerCircle.attr('cx');
    const innerCircleCY = +innerCircle.attr('cy');

    innerCircle
        .attr('cx', xRatio * innerCircleCX)
        .attr('cy', yRatio * innerCircleCY);

    const coverageCircleCX = +coverageCircle.attr('cx');
    const coverageCircleCY = +coverageCircle.attr('cy');

    coverageCircle
        .attr('cx', xRatio * coverageCircleCX)
        .attr('cy', yRatio * coverageCircleCY);
}