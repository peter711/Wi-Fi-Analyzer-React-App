import React from "react";
import styled from "styled-components";

import { Consumer } from "../../context";
import Select from "../Select";
import Radio from "../Radio";
import Separator from "../Separator";
import Button from "../Button";

const RightPaneWrapper = styled.div`
  width: 280px;
  background-color: #0c0f12;
  color: white;
  padding: 1.5em;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const txPowerOptions = [
  { text: "High 4dBm", value: 4 },
  { text: "Medium -6dBm", value: -6 },
  { text: "Low -16dBm", value: -16 }
];

const radioOptions = [
  { text: "2.4 GHz", value: 2.4 },
  { text: "5 GHz", value: 5 }
];

let prevState = undefined;

class RightPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txPower: undefined,
      radio: undefined
    };
  }

  componentDidMount() {
    const { txPower, radio } = this.props.context;
    prevState = {
      txPower,
      radio
    };

    this.setState(prevState);
  }

  onTxSelectChanged(value) {
    this.setState({ txPower: Number(value) });
  }

  onRadioChanged(value) {
    this.setState({ radio: Number(value) });
  }

  onSaveClick({ txPower, radio, updateAccessPoint }) {
    prevState = {
      txPower,
      radio
    };

    updateAccessPoint(this.state);
  }

  onCancelClick({ updateAccessPoint }) {
    debugger;
    if (prevState) {
      this.setState(prevState);
      updateAccessPoint(prevState);
    }
  }

  render() {
    return (
      <RightPaneWrapper>
        <Select
          options={txPowerOptions}
          label={"TX Power"}
          value={this.state.txPower}
          onChange={value => this.onTxSelectChanged(value)}
        />
        <Radio
          options={radioOptions}
          label={"Radio"}
          value={this.state.radio}
          onChange={value => this.onRadioChanged(value)}
        />
        <Separator />
        <ButtonsWrapper>
          <Button
            className="primary"
            text={"Save"}
            onClick={() => this.onSaveClick(this.props.context)}
          />
          <Button text={"Cancel"} onClick={() => this.onCancelClick(this.props.context)} />
        </ButtonsWrapper>
      </RightPaneWrapper>
    );
  }
}

export default () => (
  <Consumer>
    {context => <RightPane context={context} />}
  </Consumer>
);
