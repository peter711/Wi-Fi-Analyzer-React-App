import React from 'react';
import styled from 'styled-components';

import { Consumer } from '../../context';

const CoordsPaneWrapper = styled.div`
    height: 100%;
    width: 100%;
`;


const CoordsPane = () => {
    return (
        <Consumer>
            {context => (
                <CoordsPaneWrapper>
                    {context.txPower} {context.radio}
                </CoordsPaneWrapper>
            )
            }
        </Consumer>
    )
}

export default CoordsPane;