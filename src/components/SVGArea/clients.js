import React from "react";
import { select } from "d3";

import * as d3Commons from './d3-commons';
import * as FSPLCommons from '../../commons/FSPL-commons';

class Clients extends React.Component {

  componentDidMount() {
    drawClients(this.props);
  }

  shouldComponentUpdate(nextProps) {
    const { accessPointX, accessPointY, accessPointRadius, yScale, xScale } = nextProps;

    if (this.props.yScale !== yScale || this.props.xScale !== xScale) {
      onScaleUpdate({
          yScale: this.props.yScale,
          xScale: this.props.xScale
      },{
          yScale,
          xScale
      });
  }

    return this.props.accessPointX !== accessPointX
      || this.props.accessPointY !== accessPointY
      || this.props.accessPointRadius !== accessPointRadius;
  }

  componentWillUpdate(nextProps) {
    markClientsInRange(nextProps);
  }

  render() {
    return <React.Fragment />
  }

}

export default Clients;

//////////////////////////////////////////////////////////////

const circles = [];

function drawClients({ svg, xScale, yScale, clients }) {
  clients.forEach(client => drawCircle(client, { xScale, yScale }, svg));
}

function drawCircle({ x, y }, { xScale, yScale }, svg) {
  const circle = select(svg)
    .append("circle")
    .attr("cx", xScale(x))
    .attr("cy", yScale(y))
    .attr("r", 8)
    .attr("fill", "red");

  circles.push(circle);
}

function markClientsInRange({ accessPointX, accessPointY, accessPointRadius }) {
  circles.forEach(circle => {
    const x = Number(circle.attr('cx'));
    const y = Number(circle.attr('cy'));
    const isInRange = FSPLCommons.isClientInRangeOfAccessPoint({ x, y }, { accessPointRadius, accessPointX, accessPointY });
    circle.attr('fill', isInRange ? 'green' : 'red');
  })
}

function onScaleUpdate(oldScales, newScales) {
  const xRatio = d3Commons.calculateTransformRangeRation(oldScales.xScale, newScales.xScale);
  const yRatio = d3Commons.calculateTransformRangeRation(oldScales.yScale, newScales.yScale);
  
  circles.forEach(circle => {
    const x = Number(circle.attr('cx'));
    const y = Number(circle.attr('cy'));

    circle.attr('cx', xRatio * x);
    circle.attr('cy', yRatio * y);
  });
}
