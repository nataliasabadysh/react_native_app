import React from 'react';
import {View, Text, FlatList, StyleSheet } from 'react-native';

// Components
import Count from '../components/Test';

const Contacts = ({ route }) => {
    const { name, data } = route.params;
    return (
        <>
            <Count/>
            <View>
                <Text style={styles.sectionTitle}> {name}</Text>
            </View>

            <FlatList
                data={data}
                style={styles.container}
                keyExtractor={item => item.details}
                renderItem={({ item }) => <Text style={styles.text}> Location: {item.name}, {item.details}</Text>}
            />

        </>
    )
}


const styles = StyleSheet.create({
    container:{
      margin: 10,
      fontSize: 40,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      paddingVertical: 10,
      paddingHorizontal:40,
      color:'#808080'
    },
    text:{
      fontSize: 16,
      paddingVertical: 4,
      paddingHorizontal:40,
      fontWeight:'bold',
    }
})

export default Contacts;

