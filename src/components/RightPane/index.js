import React from 'react';
import styled from 'styled-components';

import Select from '../Select';

const RightPaneWrapper = styled.div`
    width: 280px;
    background-color: #0C0F12;
    color: white;
    padding: 1.5em;
`;

const txPowerOptions = [
    { text: 'High 4dBm', value: "4dBm" },
    { text: 'Medium -6dBm', value: "-6dBm" },
    { text: 'Low -16dBm', value: "-16dBm" },
];

const RightPane = () => {
    return (
        <RightPaneWrapper>
            <Select options={txPowerOptions} label={'TX Power'}/>
        </RightPaneWrapper>
    )
}

export default RightPane;