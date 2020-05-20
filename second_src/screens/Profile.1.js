import React from 'react';
import {View, Text, FlatList, StyleSheet , TouchableOpacity} from 'react-native';

const Profile = ({ route }) => {
    const { name, details } = route.params;

//     return <View style={styles.container}> 
//                 <Text style={styles.title}> {name}</Text> 
//             </View>
    
// }


// const Profile = ({ handlePress, description }) => {
//     return (<TouchableOpacity onPress={handlePress}>
//                         <Text>{description} </Text>
//                     </TouchableOpacity>)
    
    return <View style={styles.container}> 
                <Text style={styles.title}> {name}</Text> 
            </View>
    
}


const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: '800',
        paddingVertical: 10,
        paddingHorizontal:60,
        color:'#333'

    },
    container:{
        paddingVertical: 10,
        paddingHorizontal:40,
        backgroundColor: '#fff'
    }
})

export default Profile;

