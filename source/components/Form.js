

import React, { useState } from 'react';
import{ useDispatch, useSelector } from 'react-redux';
import { Text,  StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';


export const Form = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [comments, setComments] = useState('');


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

      return(
          <SafeAreaView style={styles.safeArea}>
              <ScrollView style={styles.container}>
                  <Text>Basic text input</Text>
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
  
          <Text>Number input</Text>
          <Text>Current value: {age}</Text>
              <TextInput
                  style={styles.input}
                  value={age}
                  onChangeText={setAge}
                  keyboardType="numeric"
                  placeholder="Only number here! your age"
              />
  
          <Text>Password input</Text>
          <Text>Current value: 🤫</Text>
              <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              placeholder="Something secret as password"
              />
  
          <Text>Multiline input</Text>
          <Text>Current value: {comments}</Text>
          <TextInput
            style={styles.input}
            value={comments}
            onChangeText={setComments}
            multiline={true}
            numberOfLines={4}
            placeholder="Type yor comments. So many lines, so little time! "
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
        padding: 5
    },
  
  });
  