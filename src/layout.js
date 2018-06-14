import React from 'react';
import styled from 'styled-components';

import CoordsPane from './components/CoordsPane';
import RightPane from './components/RightPane';

const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100vh;
`;

const Layout = () => (
    <ContainerWrapper>
        <CoordsPane/>
        <RightPane/>
    </ContainerWrapper>
);

export default Layout;