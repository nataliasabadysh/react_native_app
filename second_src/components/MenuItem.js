// Core
import React from 'react';
// Styles 
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const MenuItem = ({ title, text, icon }) => (
    <Container>   
        <TouchableOpacity>
            <IconView source={ icon } />
        </TouchableOpacity>
       
        <Contant>
            <Title>{title} </Title>
            <Text>{text} </Text>
        </Contant>

    </Container>   
)


const Container = styled.View`
    flex-direction: row;
    margin: 15px;
`;

const Contant = styled.View`
    padding-left: 20px;
`;

const IconView = styled.Image`
   width: 32px;
   height: 32px;
   justify-content: center;
   align-items: center;
`;

const Title = styled.Text`
    color: #3c4560;
    font-size: 22px;
    font-weight: 600;
`;

const Text = styled.Text`
    font-size: 14px;
    margin-top: 5px;
    color: #3c4560;
    opacity: 0.6;  /* rgba */
    font-weight: 600;
`;

export default MenuItem;
