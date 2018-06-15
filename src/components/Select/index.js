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

const Select = ({ options, label, currentValue, onChange }) => (
    <SelectWrapper>
        <label>
            {label}
        </label>
        <select onChange={e => onChange(e.target.value) }>
            { renderOptions(options, currentValue) }
        </select>
    </SelectWrapper>
);


export default Select;

/////////////////////////////////////////////////


function renderOptions(options, currentValue) {
    return (
        options.map((option, index) => renderOption(option, index, currentValue))
    );
}

function renderOption({ value, text }, index, currentValue) {
    const props = { selected: currentValue === value};
    return (
        <option key={index} value={value} {...props}>{text}</option>
    );
}