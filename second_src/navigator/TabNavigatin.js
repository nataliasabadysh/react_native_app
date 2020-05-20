
// Core 
import React from 'react';
import { Text, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Styles 
import styled from 'styled-components';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

const HomeStackApp = createStackNavigator({
    Home,
    Profile,
});
const CourseStackApp = createStackNavigator({
    Courses: Profile,
});
const ProjectStackApp = createStackNavigator({
    Projects: Profile,
});

export const TabStackApp = createBottomTabNavigator({
    HomeStackApp,
    CourseStackApp,
    ProjectStackApp
});


