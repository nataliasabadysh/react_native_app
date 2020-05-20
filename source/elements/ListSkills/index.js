import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { COLORS } from '../../assets/color';
import { SKILLS } from '../../server/constanst';


const ViewItem = ({ name }) =>(
    <View>
        <Text style={styles.text}>{name}</Text>
    </View>
)

const ListSkills = () => (
    <SafeAreaView>
        <FlatList 
            data={SKILLS} 
            // numColumns={2}
            keyExtractor={(item, index) => item} 
            renderItem={ ({ item }) => <ViewItem name={item}/> } 
            ListEmptyComponent={<Text>List Empty </Text>}
            ListFooterComponent={<Text>PS: MERN stak </Text>}
            ListHeaderComponent={<Text>Frameworks and Libraries to Know as a Full-Stack Developer </Text>}
        />
    </SafeAreaView>
)

const styles = StyleSheet.create({
    sectionTitle: {
      fontSize: 25,
      fontWeight: '600',
      paddingVertical: 10,
      paddingHorizontal:40,
      color:'#000080'
    },
    text:{
      fontSize: 16,
      fontWeight:'bold',
      color:'#000080',
      paddingVertical: 10,
      paddingHorizontal:40,
    }
  })

  
export default ListSkills;
