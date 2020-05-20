// Core 
import React,{ useState, useEffect, useContext } from 'react';
import { Text, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Styles 
import styled from 'styled-components';

const Stack = createStackNavigator();


// Component
const Loging = ({ navigation }) =>{
    // const { user, login } = useContext(AuthContext);

    return(
    <Container> 
        <Text> Log in </Text> 
        <Button title="Go to Register" 
            onPress={()=>  navigation.navigate('Register') } 
        />

        <Button
            onPress={ () => console.log('log in') } 
            title={"Log in "}
        />
    </Container>
    )
}
    

const Register = ({ navigation, route }) => 
    <Container> 
        <Text> Registration  </Text> 
        <Text> route name : {route.name} </Text> 
        
        <Button title="Go to Loging" 
            onPress={ ()=>  navigation.navigate('Loging') } 
        />
    </Container>



function AuthStack() {
    const [loading, setLoading] = useState(false);

    if(loading){
        return <Container><ActivityIndicator size="large"/></Container>
    }
    return (
        <Stack.Navigator initialRouteName='Loging' screenOptions={{ header: ()=> null }}>
                <Stack.Screen name="Loging" component={Loging} />
                <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
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
