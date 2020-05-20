// Core
import React, { createContext, useState } from 'react';
// import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, Button, ActivityIndicator, AsyncStorage } from 'react-native';


export const AuthContext = createContext({
    user: null,
    login: ()=> {},
    loguot: ()=> {}
});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
 return(
        <AuthContext.Provider value={{
            user, 
            login: () => AsyncStorage.setItem('user', JSON.stringify({ username: "Bob"})), // + try catch 
            loguot: () => AsyncStorage.removeItem('user'),// + try catch 
        }}>  
          <View>  <Text> { children } </Text> </View>
        </AuthContext.Provider>
    
)}
export default AuthProvider;
