import { View, FlatList, TouchableOpacity, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

export default function IngredientList({
  ingredients,
  setIngredients,
}) {
  return (
    <FlatList
      data={Object.entries(ingredients)}
      renderItem={({item}) => {
        const [ingredient, ingredientMetadata] = item;
        const { quantity, hasIngredientBeenBought } = ingredientMetadata;

        return (
          <View style={styles.ingredientContainer}>
            {!hasIngredientBeenBought && (
               <>
                <TouchableOpacity
                  onPress={() => {
                    setIngredients({
                      ...ingredients,
                      [ingredient]: {
                        ...ingredient,
                        hasIngredientBeenBought: true,
                      }
                    });
                  }}
                >
                  <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.ingredientQuantity}>{quantity > 1 && `(${quantity})`}</Text>
                <Text style={styles.ingredient}>{ingredient}</Text>
             </>
            )}
          </View>
        )
      }}
    />
  )
}