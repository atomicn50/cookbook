import { useState } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';

import { Fontisto } from '@expo/vector-icons';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


export default function Shopping() {
  const [input, setInput] = useState('');
  const [ingredients, setIngredients ] = useState([]);

  return (
    <View>
      <View
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder='ingredient'
          onChangeText={(i) =>setInput(i)}
        >
        </TextInput>
        <TouchableOpacity
          onPress={() => setIngredients([...ingredients, input])}
        >
          <Fontisto name="shopping-basket-add" size={24} color="black" />
        </TouchableOpacity>
        </View>
        <FlatList
          data={ingredients}
          renderItem={({item}) => <Text>{item}</Text>}
        />  
    </View>
  );
}