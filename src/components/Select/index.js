import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    label {
        margin-bottom: 10px;
        font-weight: bold;
        color: silver;
    }

    select {
        background-color: black;
        color: white;
        border-color: silver;
        padding: 0.5em;
        font-weight: bold;
    }
`;

const Select = ({ options, label, onChange }) => (
    <SelectWrapper>
        <label>
            {label}
        </label>
        <select onChange={e => onChange(e.target.value) }>
            { options.map(({ value, text }, index) => <option key={index} value={value}>{text}</option>) }
        </select>
    </SelectWrapper>
);

export default Select;