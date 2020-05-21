
import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const Button = ({ title="Button", onPress }) => {
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
      backgroundColor: '#00CED1',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });