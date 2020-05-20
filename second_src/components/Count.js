
import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput
 } from 'react-native';

 

export const Count = () => {
  const [count, setCount] = useState(0);

  const _increment = useCallback(() => setCount(current => current + 1), []);
  const _decrement = useCallback(() => setCount(current => current - 1), []);
  const _recet = useCallback(() => setCount(()=> 0), []);

  return (
    <SafeAreaView>
      <Text>Counter: {count}</Text>

        <View style={styles.buttons}>
        <TouchableOpacity onPress={_increment}>
            <Text>Increment</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={_decrement}>
            <Text>Decrement</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={_recet}>
            <Text>Reset</Text>
        </TouchableOpacity>
        </View>
 
    </SafeAreaView>
  );
}

/*
Redux State 

const types = {
    INCREMENT: 'INCREMENT',
    DECCREMENT: 'DECCREMENT',
    RESET: 'RESET',
}
export const counterReducer = (state = 1, { type, payload }) => {
    switch(type){
        case types.INCREMENT: return state + 1
        case types.DECCREMENT: return state - 1 
        case types.RESET: return 0 
        default: return state;
    }
}
// actions 
const actionsIncrement = {type: 'INCREMENT'}
const actionsDecrement = { type: 'DECCREMENT'}
const actionsReset = { type: 'RESET'}

// component 
    const counter = useSelector(( state) => state.counter);
    const dispatch = useDispatch();

    const _increment = useCallback(() => dispatch(actionsIncrement), []);
    const _decrement = useCallback(() => dispatch(actionsDecrement), []);
    const _recet = useCallback(() => dispatch(actionsReset), []);

*/