import React from 'react';
import styled from 'styled-components';

const TitleBar = styled.h1`
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    background-color: #173647;
`;

const Header = () => {
    return <TitleBar>Mask Map</TitleBar>;
};

export default Header;