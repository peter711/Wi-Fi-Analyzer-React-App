import React from "react";
import { select } from "d3";

import generateMockClients from "../../mock/clients";

class Clients extends React.PureComponent {

  componentDidMount() {
    drawClients(this.props);
  }

  render() {
    return <React.Fragment />
  }

}

export default Clients;

//////////////////////////////////////////////////////////////

function drawClients({ svg, xScale, yScale }, clients = []) {
  if (clients.length === 0) {
    clients = generateMockClients(2000, 2000);
  }
  clients.forEach(client => drawCircle(client, { xScale, yScale }, svg));
}

function drawCircle({ x, y }, { xScale, yScale }, svg) {
  select(svg)
    .append("circle")
    .attr("cx", xScale(x))
    .attr("cy", yScale(y))
    .attr("r", 8)
    .attr("fill", "red");
}
