import React from "react";
import styled from "styled-components";

import { Consumer } from "../../context";

import SVGArea from "../SVGArea";
import Clients from "../SVGArea/clients";

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
            <SVGArea>
              <Clients/>
            </SVGArea>
            {/* {context.txPower} {context.radio} */}
          </CoordsPaneWrapper>
        )}
      </Consumer>
    );
  }
}

export default CoordsPane;
