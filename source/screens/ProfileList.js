import React from 'react';
import {View, Text, FlatList } from 'react-native';

// const ProfileList = ({ route }) => {
//     const { description } = route.params;
  
//     return (
//       <FlatList
//         data={description}
//         keyExtractor={item => item.description}
//         renderItem={({ item }) => <Text>{item.description}</Text>}
//       />
//     );
//   };
  


const ProfileList = ({ route }) => {
  const { name } = route.params;
  return (
      <>
          <View>
              <Text> {name}</Text>
          </View>


      </>
  )
}

// <FlatList
// data={details}
// //style={styles.container}
// keyExtractor={item => item.details}
// renderItem={({ item }) => <Text> Location: {item.name}</Text>}
// />

export default ProfileList;
