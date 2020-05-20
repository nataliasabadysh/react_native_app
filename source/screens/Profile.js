// Core
import React from 'react';
import { Button } from 'react-native';

// Styles 
import styled from 'styled-components';

const Profile = ({ navigation }) => {
 return(
        <Container>
            <Text>  Profile file </Text>
            <Button title="Go to home page" onPress={()=> {
                navigation.goBack();
            }} />
        </Container>
)}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
    color: #3c4560;
    font-size: 27px;
    font-weight: 600;
    margin-left: 8px;
`;

export default Profile;
