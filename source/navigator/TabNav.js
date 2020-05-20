
// Core 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

// nav
const HomeStack = createStackNavigator();
const ProjectStack = createStackNavigator();
const CourseStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const  HomeStackScreen = () => 
   <HomeStack.Navigator screenOptions={{ header: ()=> null }} mode="modal" >
        <HomeStack.Screen name="Home" component={Home} />             
        <HomeStack.Screen name="Profile" component={Profile} /> 
   </HomeStack.Navigator>

const CourseStackScreen = () => 
    <CourseStack.Navigator screenOptions={{ header: ()=> null }}>
        <CourseStack.Screen name="Profile" component={Profile} />
    </CourseStack.Navigator>

const ProjectStackScreen = () => 
    <ProjectStack.Navigator screenOptions={{ header: ()=> null }}>
        <ProjectStack.Screen name="Profile" component={Profile} />
    </ProjectStack.Navigator>

export default function TabNavigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator  tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray', fontSize: '34px', }}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Courses" component={CourseStackScreen} />
            <Tab.Screen name="Project" component={ProjectStackScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

