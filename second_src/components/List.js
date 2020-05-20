import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput
 } from 'react-native';


const CatFacts = () => {
  const [facts, setFacts] = useState([]);

  const handleFetchCatFacts = useCallback(async () => { // useCallback does network request 
    const result = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=4');
    const facts = await result.json();
    if (result.ok) {
      setFacts(facts);
    }
  });

  useEffect(() => {
    handleFetchCatFacts();
  }, []);

  return (
    <SafeAreaView >
      <FlatList
        data={facts}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <Text>{item.text}</Text>}
      />
    </SafeAreaView>
  );
}

export default CatFacts;
