import React from 'react';
import { RadioWrapper, RadioInputWrapper } from './styles';

class Radio extends React.PureComponent {
  render() {
    const { label, options } = this.props;
    return (
      <RadioWrapper>
        <label>{label}</label>
        {options && renderRadios(this.props)}
      </RadioWrapper>
    );
  }
}

export default Radio;

/////////////////////////////////////////////////////////////

function renderRadios(props) {
  const { onChange, value } = props;
  return (
    props.options.map((option, index) => (
      renderRadio(option, index, { onChange, currentValue: value })
    ))
  );
}

function renderRadio({ text, value }, index, { onChange, currentValue }) {
  return (
    <RadioInputWrapper key={index}>
      <label>
        {text}
        <input
          type="radio"
          name="radioInput"
          value={value}
          checked={value === currentValue}
          onChange={(event) => {
            const value = event.target.value;
            onChange(value);
          }}
        />
        <span className="checkmark" />
      </label>
    </RadioInputWrapper>
  );
}
