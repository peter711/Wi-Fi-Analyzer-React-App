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

class Select extends React.PureComponent {
    render() {
        const { options, label, onChange } = this.props;
        return (
            <SelectWrapper>
                <label>
                    {label}
                </label>
                <select onChange={e => {
                    const value = e.target.value;
                    onChange(value);
                }
                } value={this.props.value}>
                    {renderOptions(options)}
                </select>
            </SelectWrapper>
        );
    }
}

export default Select;

/////////////////////////////////////////////////


function renderOptions(options) {
    return (
        options.map((option, index) => renderOption(option, index))
    );
}

function renderOption({ value, text }, index) {
    return (
        <option key={index} value={value}>{text}</option>
    );
}