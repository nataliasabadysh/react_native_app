
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const DetailsScreen = () => 
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
        <Text>Details screen </Text>
    </View>

const  HomeScreen = ({ navigation }) =>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
        <Text>Home screen</Text>
        <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>

const SettingsScreen = ({ navigation }) => 
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings screen</Text>
        <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>

const HomeStack = createStackNavigator();
const  HomeStackScreen = () => 
   <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />             
        <HomeStack.Screen name="Details" component={DetailsScreen} />
   </HomeStack.Navigator>

// nav 
const SettingsStack = createStackNavigator();
const SettingsStackScreen = () => 
    <SettingsStack.Navigator>
        <SettingsStack.Screen name="Settings" component={SettingsScreen} />
        <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray' }}>
            <Tab.Screen name="Home tab" component={HomeStackScreen} />
            <Tab.Screen name="Settings tab" component={SettingsStackScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}