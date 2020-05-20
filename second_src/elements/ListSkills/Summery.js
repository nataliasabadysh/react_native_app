import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import { SUMMERY } from '../../server/constanst';

const ViewItem = ({ name }) =>(
    <View>
        <Text style={styles.sectionTitle}>{name}</Text>
    </View>
)

const Summery = () => (
    <SectionList 
        sections={SUMMERY} 
        keyExtractor={(item, index) => item} 
        renderItem={ ({ item }) => <ViewItem name={item}/> }
        renderSectionHeader = { ({ section :{ title } })=> <Text style={styles.title}> { title }</Text>  }
    />
)

const styles = StyleSheet.create({
    container:{
      margin: 10,
      fontSize: 40,
      alignContent: "center",
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal:40,
      backgroundColor: '#51d0de',
    },
    title:{
        fontSize: 24,
        fontWeight: '600',
        paddingVertical: 10,
        paddingHorizontal:40,
        color:'#800080'
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
      fontWeight:'bold',
    }
  })

  
export default Summery;
