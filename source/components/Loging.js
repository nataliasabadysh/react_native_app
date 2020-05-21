// Core
import React, { useState , useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text,  StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Button } from './ButtonCustom';


export const Login = ({ navigation }) =>{

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const user = useSelector( state => state.user);// from global state 

    const handleSubmit = useCallback(() => {
        if (!name) {
          Alert.alert('Please add a name to your profile');
        // } else if (selectedProfile.length < 3) {
        //   Alert.alert('Please choose at least 3 topics');
        } else {
        //   navigation.navigate('Home', { newProfile: {name, details: selectedProfile },});
        }
      }, [name]);

    const onSend = ()=> {
        const form = {
            name,
            email,
            age,
            password,
            comments,
        }
        dispatch(actionSome(form))
    }

    const addUser = (user) =>{
        const data = {
            name: 'Natalia Sabadysh',
            password: '123'
        }
    } 

      return(
          <SafeAreaView>

              <ScrollView style={styles.container}>

                <Text style={styles.title}>Log in</Text>
                <Text>Name: {name}</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Name"
                />
                <Text>Your Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholder="Something secret as password"
                />

                <TouchableOpacity>
                    <Text>Submit!</Text>
                </TouchableOpacity>

                <Button 
                    title="Or go to Register" 
                    onPress={()=>navigation.navigate('Register')}
                />

            </ScrollView>
        </SafeAreaView>
      )
  } 
  
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 5,
        marginBottom: 20,
    },
    container: {
        padding: 5,
        paddingHorizontal: 20,
        paddingVertical: 60,
    },
    title: {
        fontSize: 30,
    }
  });
  