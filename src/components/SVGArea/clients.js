import React from "react";
import { select } from "d3";

import * as FSPLCommons from '../../commons/FSPL-commons';

class Clients extends React.Component {

  componentDidMount() {
    drawClients(this.props);
  }

  shouldComponentUpdate(nextProps) {
    const { accessPointX, accessPointY, accessPointRadius } = nextProps;
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

function markClientsInRange({ accessPointX, accessPointY, accessPointRadius}) {
  circles.forEach(circle => {
    const x = Number(circle.attr('cx'));
    const y = Number(circle.attr('cy'));
    const isInRange = FSPLCommons.isClientInRangeOfAccessPoint({ x, y }, { accessPointRadius, accessPointX, accessPointY });
    circle.attr('fill', isInRange ? 'green' : 'red' );
  }) 
}
