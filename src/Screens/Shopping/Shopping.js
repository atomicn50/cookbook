import { useState } from 'react';
import { View } from 'react-native';

import InputBar from './InputBar/InputBar';
import IngredientList from './IngredienList/IngredientList';
import BoughtIngredients from './BoughtIngredients';
import ClearListButton from './ClearListButton';
import styles from './styles';

export default function Shopping() {
  const [input, setInput] = useState('');
  const [ingredients, setIngredients] = useState({});
  const ingredientsData = Object.entries(ingredients);
  const boughtIngredientsData = ingredientsData.filter(([_, { hasIngredientBeenBought }]) => hasIngredientBeenBought);

  const onPress = () => {
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
      <InputBar onPress={onPress} onChangeText={setInput}/>
      <IngredientList ingredients={ingredientsData} setIngredients={setIngredients}/>
      <BoughtIngredients boughtIngredients={boughtIngredientsData} setIngredients={setIngredients}/>      
      <ClearListButton onPress={() => setIngredients({})}/>
    </View>
  );
}