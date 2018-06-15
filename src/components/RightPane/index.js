import React from "react";
import styled from "styled-components";

import { Consumer } from "../../context";

import Select from "../Select";
import Radio from "../Radio";
import Separator from '../Separator';

const RightPaneWrapper = styled.div`
  width: 280px;
  background-color: #0c0f12;
  color: white;
  padding: 1.5em;
`;

const txPowerOptions = [
  { text: "High 4dBm", value: "4dBm" },
  { text: "Medium -6dBm", value: "-6dBm" },
  { text: "Low -16dBm", value: "-16dBm" }
];

const radioOptions = [
  { text: "2.4 GHz", value: "2.4" },
  { text: "5 GHz", value: "5" }
];

class RightPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txPower: txPowerOptions[0].value,
      radio: radioOptions[0].value
    };
  }

  onTxSelectChanged(value) {
    this.setState({ txPower: value });
  }

  onRadioChanged(value) {
    this.setState({ radio: value });
  }

  render() {
    return (
      <Consumer>
        {context => (
          <RightPaneWrapper>
            <Select
              options={txPowerOptions}
              label={"TX Power"}
              onChange={value => this.onTxSelectChanged(value)}
            />
            <Radio
              options={radioOptions}
              label={"Radio"}
              onChange={value => this.onRadioChanged(value)}
            />
            <Separator/>
          </RightPaneWrapper>
        )}
      </Consumer>
    );
  }
}

export default RightPane;
