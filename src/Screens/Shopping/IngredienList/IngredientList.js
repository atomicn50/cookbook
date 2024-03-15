import { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, TextInput } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import DeleteButton from './DeleteButton/DeleteButton';
import styles from '../styles';

export default function IngredientList({
  ingredients,
  handleCheckIngredient,
  handleRemoveIngredient,
  handleIngredientOnPress,
  handleEditingIngredient,
}) {
  const [edited, setEdited] = useState({});
  return (
    <View style={styles.ingredientListContainer}>
      <FlatList
        data={ingredients}
        renderItem={({item}) => {
          const [ingredient, { quantity, isEditing }] = item;
          return (
            <View>
              {isEditing
                ? <View style={styles.ingredientContainer}>
                    <TextInput onChangeText={(query) => setEdited({ [ingredient]: query})}>{ingredient}</TextInput>
                    <TouchableOpacity onPress={() => handleEditingIngredient(ingredient, edited[ingredient])}>
                      <MaterialCommunityIcons name="check" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                : <View style={styles.ingredientContainer}>
                    <TouchableOpacity testID={`${ingredient}-checkbox-button`} onPress={() => handleCheckIngredient(ingredient)}>
                      <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ingredientContainer} onPress={() => handleIngredientOnPress(ingredient)}>
                      <Text style={styles.ingredientQuantity}>{quantity > 1 && `(${quantity})`}</Text>
                      <Text style={styles.ingredient}>{ingredient}</Text>
                    </TouchableOpacity>
                    <DeleteButton testID='ingredient-delete-button'onPress={() => handleRemoveIngredient(ingredient)} />
                  </View>}
            </View>
          );
        }}
      />
    </View>
  );
}