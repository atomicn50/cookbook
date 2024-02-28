import { useState, useMemo } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { Fontisto } from '@expo/vector-icons';

import IngredientList from './IngredientList';
import BoughtIngredients from './BoughtIngredients';
import ClearListButton from './ClearListButton';
import styles from './styles';

export default function Shopping() {
  const [input, setInput] = useState('');
  const [ingredients, setIngredients] = useState({});
  const boughtIngredients = (
    Object.entries(ingredients)
      .filter(([_, { hasIngredientBeenBought }]) => hasIngredientBeenBought)
  )

  const handleOnPress = () => {
    if (input && ingredients[input]) {
      setIngredients(prevIngredients => ({
        ...prevIngredients,
        [input]: {
          hasIngredientBeenBought: false,
          quantity: prevIngredients[input].quantity + 1,
        },
      }));
    } else {
      input && setIngredients(prevIngredients => ({
        ...prevIngredients,
        [input]: {
          hasIngredientBeenBought: false,
          quantity: 1,
        },
      }));
    }
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Add item'
            onChangeText={(i) =>setInput(i)}
          >
          </TextInput>
          <TouchableOpacity onPress={handleOnPress}>
            <Fontisto name="shopping-basket-add" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <IngredientList ingredients={ingredients} setIngredients={setIngredients}/>
        <BoughtIngredients boughtIngredients={boughtIngredients} setIngredients={setIngredients}/>
        <ClearListButton onPress={() => setIngredients({})}/>
      </View>
    </View>
  );
}