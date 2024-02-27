import { useState } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { Fontisto } from '@expo/vector-icons';

import IngredientList from './IngredientList';
import BoughtIngredients from './BoughtIngredients';
import styles from './styles';

export default function Shopping() {
  const [input, setInput] = useState('');
  const [ingredients, setIngredients] = useState({});

  /*
  {
    beans: {
      quantity: 1,
      bought: false
    }
  }
  */

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View>
        <View
          style={styles.inputContainer}
        >
        <TextInput
          style={styles.input}
          placeholder='Add item'
          onChangeText={(i) =>setInput(i)}
        >
        </TextInput>
        <TouchableOpacity
          onPress={() => {
            if (input && ingredients[input]) {
              setIngredients({
                ...ingredients,
                [input]: {
                  ...ingredients[input],
                  quantity: ingredients[input] + 1,
                }
              });
            } else {
              setIngredients({
                ...ingredients,
                [input]: {
                  hasIngredientBeenBought: false,
                  quantity: 1,
                },
              });
            }
          }}
        >
          <Fontisto name="shopping-basket-add" size={24} color="black" />
        </TouchableOpacity>
        </View>
        <IngredientList
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
        {/* <BoughtIngredients
          ingredients={ingredients}
          setIngredients={setIngredients}
          boughtIngredients={boughtIngredients}
          setBoughtIngredients={setBoughtIngredients}
        /> */}
      </View>
    </View>
  );
}