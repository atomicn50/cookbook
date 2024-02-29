import { useState } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import IngredientList from './IngredienList'
import BoughtIngredients from './BoughtIngredients';
import ClearListButton from './ClearListButton';
import styles from './styles';

export default function Shopping() {
  const [input, setInput] = useState('');
  const [ingredients, setIngredients] = useState({});
  const ingredientsData = Object.entries(ingredients);
  const boughtIngredientsData = ingredientsData.filter(([_, { hasIngredientBeenBought }]) => hasIngredientBeenBought);

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
    <View style={styles.screen}>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Add item'
            onChangeText={(i) =>setInput(i)}
            clearButtonMode='while-editing'
          />
          <TouchableOpacity onPress={handleOnPress} style={styles.inputButton}>
            <Feather name="plus-circle" size={26} color="orangered" />
          </TouchableOpacity>
        </View>
        <IngredientList ingredients={ingredientsData} setIngredients={setIngredients}/>
        <BoughtIngredients boughtIngredients={boughtIngredientsData} setIngredients={setIngredients}/>      
      </View>
      <ClearListButton onPress={() => setIngredients({})}/>
    </View>
  );
}