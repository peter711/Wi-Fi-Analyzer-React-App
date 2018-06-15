import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  button {
    border: none;
    background: none;
    color: #2196f3;
    font-family: 'Lato';
    font-size: 14px;
    font-weight: bold;
    margin: 0 0.5em 0 0.5em;
    padding: 0.4em 1em 0.4em 1em;
    text-transform: uppercase;
  }

  button.primary {
      background-color: #2196f3;
      border-radius: 5px;
      color: white;
  }

  button:hover {
      background-color: grey;
      border-radius: 5px;
      color: white;
      cursor: pointer;
  }
`;

export const Button = ({ text, className, onClick }) => (
  <ButtonWrapper>
    <button className={className} onClick={onClick}>{text}</button>
  </ButtonWrapper>
);

export default Button;
