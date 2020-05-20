import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput
 } from 'react-native';

//  import Select from '../components/Select';
 import Toggle from '../components/Toggle';


const Form = () =>{

    return(
        <Toggle />
    )
} 

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    // cursor: 'pointer'
  },
  list: {
        marginTop: 40,
        padding: 10,
   },
  text: {
        marginBottom: 20,
        fontSize: 23,
        textAlign: "center",
    },
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

export default Form;