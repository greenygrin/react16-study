import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import MapContainer from '../containers/MaskMapContainer';

const Container = styled.div`
    height: 100%;
`;

const MaskMapPage = () => {
    return (
        <Container>
            <Header />
            <MapContainer />
        </Container>
    );
};

export default MaskMapPage;