// Core
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text,  StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Picker } from 'react-native';
import { Button } from './ButtonCustom';


const COUNTRY = [
    'France',
    'United Kingdom',
    'Germany',
    'Mexico',
    'Italy',
    'United States',
    'Spain'
  ]

export const Register = ({ navigation, route }) =>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [comments, setComments] = useState('');

    const [value, setValue] = useState("United Kingdom");


    const dispatch = useDispatch();
    const user = useSelector( state => state.user);// from global state 
    
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
    // {route.name}
      return(
          <SafeAreaView>
              <ScrollView style={styles.container}>

                <Text style={styles.title}> Register </Text>
                <Text>Name: {name}</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Name"
                />
                <Text>Email: {name}</Text>
                  
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                />

                <Text>Your age: {age}</Text>
                <TextInput
                    style={styles.input}
                    value={age}
                    onChangeText={setAge}
                    keyboardType="numeric"
                    placeholder="Only number here! your age"
                />
  
                <Text>Your Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholder="Something secret as password"
                />
  
                <Text>Ditailes</Text>
                <TextInput
                    style={styles.input}
                    value={comments}
                    onChangeText={setComments}
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Type yor comments. So many lines, so little time! "
                />

                <Text>Select your country</Text>
                <Picker
                    selectedValue={value}
                    onValueChange={itemValue => setValue(itemValue) }>
            
                    {COUNTRY.map(el => <Picker.Item label={el} value={el} /> )}
                
                </Picker> 


                <TouchableOpacity>
                    <Text>Submit!</Text>
                </TouchableOpacity>

                <Button 
                    title="Or go to Login" 
                    onPress={()=>navigation.navigate('Login')}
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
  