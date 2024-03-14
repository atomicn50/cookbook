import { View, FlatList, TouchableOpacity, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import DeleteButton from './DeleteButton/DeleteButton';
import styles from '../styles';

export default function IngredientList({
  ingredients,
  handleCheckIngredient,
  handleRemoveIngredient,
}) {
  return (
    <View style={styles.ingredientListContainer}>
      <FlatList
        data={ingredients}
        renderItem={({item}) => {
          const [ingredient, { quantity }] = item;

          return (
            <View style={styles.ingredientContainer}>
              <>
                <TouchableOpacity
                  testID={`${ingredient}-checkbox-button`}
                  onPress={() => handleCheckIngredient(ingredient)}
                >
                  <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />
                </TouchableOpacity>
                  <Text style={styles.ingredientQuantity}>{quantity > 1 && `(${quantity})`}</Text>
                  <Text style={styles.ingredient}>{ingredient}</Text>
                <DeleteButton testID='ingredient-delete-button'onPress={() => handleRemoveIngredient(ingredient)} />
              </>
            </View>
          );
        }}
      />
    </View>
  );
}