import React, { useState, useCallback} from 'react';
import { Text,  StyleSheet, FlatList, Alert, Switch, View, TextInput, TouchableOpacity } from 'react-native';
// doc's ;) 
// https://reactnative.dev/docs/textinput


const PROFILE =[
    {name: "1", details:'..some text1 '},
    {name: "2", details:'..some text2 '},
    {name: "3", details:'..some text3 '},
    {name: "4", details:'..some text4 '},
];


const Modal = ({ navigation }) => {
    const [name, setName] = useState('');
    const [selectedProfile, setSelectedProfile] = useState([]);
  
    const handleUpdate = useCallback(
      (value, newValue) => {
        if (newValue === true) {
          setSelectedProfile(current => [...current, value]);
        } else {
          setSelectedProfile(current =>
            current.filter(c => c.name !== value.name),
          );
        }
      },
      [selectedProfile, setSelectedProfile],
    );
  
    const handleSubmit = useCallback(() => {
      if (!name) {
        Alert.alert('Please add a name to your profile');
      } else if (selectedProfile.length < 3) {
        Alert.alert('Please choose at least 3 topics');
      } else {
        navigation.navigate('Home', {
          newProfile: {name, details: selectedProfile },
        });
      }
    }, [name, selectedProfile]);
  
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text>Name of your topic</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>
        <FlatList
          style={styles.list}
          data={PROFILE}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <View style={styles.switch}>
              <Text>{item.name}</Text>
              <Switch
                value={
                  !!selectedProfile.find(
                    color => color.name === item.name,
                  )
                }
                onValueChange={newValue => handleUpdate(item, newValue)}
              />
            </View>
          )}
        />
        <TouchableOpacity style={styles.buttonWrapper} onPress={handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );

}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
    },
    input: {
      borderWidth: 1,
      borderColor: 'grey',
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
      fontSize: 18,
    },
    switch: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
    },
    list: {
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    heading: {
      padding: 10,
    },
    buttonWrapper: {
      height: 100,
      marginHorizontal: 10,
    },
    button: {
      height: 40,
      backgroundColor: 'teal',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    color:{
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: 'red'
    }
  });

export default Modal;
