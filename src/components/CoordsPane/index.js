import React from "react";
import styled from "styled-components";

import { Consumer } from "../../context";

import SVGArea from "../SVGArea";
import Clients from "../SVGArea/clients";
import AccessPoint from "../SVGArea/access-point";

import generateMockClients from "../../mock/clients";

const MAX_DISTANCE_IN_M = 1000;

const CoordsPaneWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

class CoordsPane extends React.Component {
  render() {
    const { radio, txPower } = this.props;
    return (
      <CoordsPaneWrapper>
        <SVGArea distance={MAX_DISTANCE_IN_M}>
          <Clients clients={generateMockClients(MAX_DISTANCE_IN_M, MAX_DISTANCE_IN_M)} />
          <AccessPoint frequency={radio} gain={txPower} />
        </SVGArea>
      </CoordsPaneWrapper>
    );
  }
}

export default () => (
  <Consumer>
    {context => <CoordsPane radio={context.radio} txPower={context.txPower} />}
  </Consumer>
);