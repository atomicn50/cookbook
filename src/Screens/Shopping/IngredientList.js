import { View, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

export default function IngredientList({
  ingredients,
  setIngredients,
  boughtIngredients,
  setBoughtIngredients,
}) {
  return (
    <FlatList
      data={Object.entries(ingredients)}
      renderItem={({item}) => {
        const [ingredient, quantity] = item;

        return (
          <View style={styles.ingredientContainer}>
            <TouchableOpacity
              onPress={() => {
                setIngredients(currState => {
                  const newState = {...currState};
                  delete newState[ingredient];
                  return newState;
                });

                setBoughtIngredients({
                  ...boughtIngredients,
                  [ingredient]: quantity
                });
              }}
            >
              <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.ingredientQuantity}>{quantity > 1 && `(${quantity})`}</Text>
            <Text style={styles.ingredient}>{ingredient}</Text>
          </View>
        )
      }}
    />
  )
}