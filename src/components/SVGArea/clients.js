import React from "react";
import { select } from "d3";

import generateMockClients from "../../mock/clients";

const Clients = ({ svg }) => {
  drawClients(svg);
  return <React.Fragment />;
};

export default Clients;

//////////////////////////////////////////////////////////////

function drawClients(svg, clients = []) {
  if (clients.length === 0) {
    clients = generateMockClients(svg.clientWidth, svg.clientHeight);
  }
  clients.forEach(client => drawCircle(client, svg));
}

function drawCircle({ cx, cy }, svg) {
  select(svg)
    .append("circle")
    .attr("cx", cx)
    .attr("cy", cy)
    .attr("r", 10)
    .attr("fill", "red");
}
