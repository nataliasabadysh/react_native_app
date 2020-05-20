// Core
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// Styles 
import styled from 'styled-components';

const Tab = createBottomTabNavigator();

function SearchTabComponent(){
    return(
        <Container> 
            <Text> Tab Search</Text>
        </Container>   
    )
}

function HomeTabComponent(){
    return(
        <Container> 
                <Text> Tab Home</Text>
        </Container>  
    )
}


function AppTabs() {
  return (
    <Tab.Navigator  
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: '#e91e63',
          }}
        >

      <Tab.Screen 
        name="Home" 
        component={HomeTabComponent} 
        options={{
            tabBarLabel: 'Home',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="home" color={color} size={size} />
            // ),
          }}
        />
      <Tab.Screen name="Search" component={SearchTabComponent} />
      <Tab.Screen name="Search" component={SearchTabComponent} />
    </Tab.Navigator>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text  = styled.Text`
    font-size: 24px;
    font-weight: 800;
    border-bottom-color: #333;
`;


export default AppTabs;

