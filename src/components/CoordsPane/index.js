import React from "react";
import styled from "styled-components";

import { Consumer } from "../../context";

import SVGArea from "../SVGArea";
import Clients from "../SVGArea/clients";
import AccessPoint from "../SVGArea/access-point";

import generateMockClients from "../../mock/clients";

const MAX_DISTANCE_IN_M = 2000;

const CoordsPaneWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

class CoordsPane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Consumer>
        {context => (
          <CoordsPaneWrapper>
            <SVGArea distance={MAX_DISTANCE_IN_M}>
              <Clients clients={generateMockClients(MAX_DISTANCE_IN_M, MAX_DISTANCE_IN_M)}/>
              <AccessPoint frequency={context.radio} gain={context.txPower}/>
            </SVGArea>
            {/* {context.txPower} {context.radio} */}
          </CoordsPaneWrapper>
        )}
      </Consumer>
    );
  }
}

export default CoordsPane;
