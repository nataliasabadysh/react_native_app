
// Core 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

import SectionsScreen from '../screens/SectionsScreen';
import CoursesScreen from '../screens/CoursesScreen';
import AuthStack from './AuthStack';

// nav
const HomeStack = createStackNavigator();
const ProjectStack = createStackNavigator();
const CourseStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const  HomeStackScreen = ({ }) => 
   <HomeStack.Navigator screenOptions={{ header: ()=> null }} mode="modal" >
        <HomeStack.Screen name="Home" component={Home} />             
        <HomeStack.Screen name="Sections" component={SectionsScreen}  /> 
   </HomeStack.Navigator>

const CourseStackScreen = () => 
    <CourseStack.Navigator screenOptions={{ header: ()=> null }}>
        <CourseStack.Screen name="Courses" component={CoursesScreen} />
    </CourseStack.Navigator>

const ProjectStackScreen = () => 
    <ProjectStack.Navigator screenOptions={{ header: ()=> null }}>
        <ProjectStack.Screen name="Profile" component={Profile} />
    </ProjectStack.Navigator>

const TabNavigation = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator  tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray' }}>

            <Tab.Screen 
                name="Home" 
                component={HomeStackScreen} 
                options={{ 
                    title: 'My Home', // remane the name
                    // tabBarVisible: false // romove tab for this section 
                }} 
            />

            <Tab.Screen 
                name="Courses" 
                component={CourseStackScreen} 
            />

            <Tab.Screen name="Project" 
                component={ProjectStackScreen} 
                options={{ 
                    title: 'Project courses',
                   
                }} 
                />
        </Tab.Navigator>
    </NavigationContainer>
  );
}


const RouterApp = () => {
    const user = false;
    return (
        <>
        { user ?
            <TabNavigation />
            : 
            <AuthStack/>
        }
        </>
    )
}
export default RouterApp;
