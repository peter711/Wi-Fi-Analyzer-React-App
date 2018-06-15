import React from "react";
import { select } from "d3";

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

function drawClients({ svg, xScale, yScale, clients }) {
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
