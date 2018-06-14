import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;

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

const Select = ({ options, label }) => (
    <SelectWrapper>
        <label>
            {label}
        </label>
        <select>
            { options.map(({ value, text }) => <option value={value}>{text}</option>) }
        </select>
    </SelectWrapper>
);

export default Select;