import { View, FlatList, TouchableOpacity, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import DeleteButton from './DeleteButton/DeleteButton';
import styles from '../styles';

export default function IngredientList({
  ingredients,
  setIngredients,
}) {
  return (
    <View style={styles.ingredientListContainer}>
      <FlatList
        data={ingredients}
        renderItem={({item}) => {
          const [ingredient, { quantity, hasIngredientBeenBought }] = item;

          return (
            <View style={styles.ingredientContainer}>
              {!hasIngredientBeenBought && (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      setIngredients(prevIngredients => ({
                        ...prevIngredients,
                        [ingredient]: {
                          ...prevIngredients[ingredient],
                          hasIngredientBeenBought: true,
                        },
                      }));
                    }}
                  >
                    <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.ingredientQuantity}>{quantity > 1 && `(${quantity})`}</Text>
                  <Text style={styles.ingredient}>{ingredient}</Text>
                  <DeleteButton onPress={() => {
                    setIngredients(prevIngredients => {
                      const newIngredients = {
                        ...prevIngredients,
                      };
                      delete newIngredients[ingredient];
                      return newIngredients
                    });
                  }}/>
                </>
              )}
            </View>
          );
        }}
      />
    </View>
  );
}