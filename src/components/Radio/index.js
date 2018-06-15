import React from "react";
import styled from "styled-components";

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    margin-bottom: 10px;
    font-weight: bold;
    color: silver;
  }
`;

const RadioInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-top: 0.3em;
  margin-bottom: 0.3em;

  > label {
    padding-left: 2.5em;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #0c0f12;
    border-radius: 50%;
    border-color: silver;
    border-width: 1px;
    border-style: solid;
  }

  :hover input ~ .checkmark {
    background-color: #ccc;
  }

  input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    top: 5px;
    left: 5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

const Radio = ({ label, options, onChange }) => (
  <RadioWrapper>
    <label>{label}</label>
    {options.map(({ text, value }, index) => (
      <RadioInputWrapper key={index}>
        <label>
          {text}
          <input
            type="radio"
            name="radioInput"
            value={value}
            onChange={(event) => onChange(event.target.value)}
          />
          <span className="checkmark" />
        </label>
      </RadioInputWrapper>
    ))}
  </RadioWrapper>
);

export default Radio;
