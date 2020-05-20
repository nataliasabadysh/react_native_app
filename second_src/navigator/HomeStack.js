// Core 
import React,{ useState, useEffect, useContext } from 'react';
import { Text, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Styles 
import styled from 'styled-components';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

function HomeStack() {
    const [loading, setLoading] = useState(false);

    if(loading){
        return <Container><ActivityIndicator size="large"/></Container>
    }
    return (
        <Stack.Navigator initialRouteName='Loging' screenOptions={{ header: () => null }} mode="modal" >
            <Stack.Screen name="Home" component={Home} options={{ headerTitle: "IT school" }}/>
            <Stack.Screen name="Profile" component={Profile}  options={{ headerTitle: "Profile courses" }} />
        </Stack.Navigator>
    );
  }

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export default HomeStack;
