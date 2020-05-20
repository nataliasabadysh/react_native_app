// Core
import React from 'react';

// Styles 
import styled from 'styled-components';

const Logo = (props) => {
 return(
        <Container>
            <Image source={ props.logo } resizeMode="contain" />
            <Text> {props.text }</Text>
        </Container>
)}

const Container = styled.View`
    flex-direction: row;
    background: white;
    height: 60px;
    padding: 12px;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    margin: 0 8px;
`;

const Image = styled.Image`
    width: 36px;
    height: 36px;

`;
const Text = styled.Text`
    color: #3c4560;
    font-size: 17px;
    font-weight: 600;
    margin-left: 8px;

`;

export default Logo;
