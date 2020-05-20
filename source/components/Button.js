
import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const CustomButton = ({ title="Button", onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonWrapper: {
      height: 100,
      marginHorizontal: 10,
    },
    button: {
      height: 40,
      width: 40,
      backgroundColor: '#eee',
      justifyContent: 'center',
      alignItems: 'center',
      position: "absolute",
      borderRadius: 40,
      padding: 5,
      top: 50,
      right: 20
      
    },
    buttonText: {
      color: '#00CED1',
      fontWeight: 'bold',
    },
  });