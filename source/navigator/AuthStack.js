// Core 
import React,{ useState, useEffect, useContext } from 'react';
import { Text, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Styles 
import styled from 'styled-components';
import { Login } from '../components/Loging';
import { Register } from '../components/Register';

const Stack = createStackNavigator();

function AuthStack() {
    const [loading, setLoading] = useState(false);

    if(loading){
        return <Container><ActivityIndicator size="large"/></Container>
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ header: ()=> null }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
  }

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.Button`
  color: palevioletred;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default AuthStack;
