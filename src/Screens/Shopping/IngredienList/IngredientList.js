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
                ? <View style={styles.editingContainer}>
                    <TouchableOpacity testID={`${ingredient}-checkbox-button`} onPress={() => handleCheckIngredient(ingredient)}>
                      <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={styles.editIngredientContainer}>
                      <TextInput
                        autoFocus
                        value={edited[ingredient]}
                        style={styles.ingredient}
                        onBlur={() => handleIngredientOnPress(ingredient)}
                        onFocus={() => setEdited({ [ingredient]: ingredient} )}
                        onChangeText={(query) => setEdited({ [ingredient]: query})}
                      >
                      </TextInput>
                      <TouchableOpacity onPress={() => {
                        if (ingredient !== edited[ingredient]) {
                          handleEditingIngredient(ingredient, edited[ingredient]);
                        } else {
                          handleIngredientOnPress(ingredient);
                        }
                      }} style={styles.checkButton}>
                        <MaterialCommunityIcons name="check" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                : <View style={styles.ingredientContainer}>
                    <TouchableOpacity testID={`${ingredient}-checkbox-button`} onPress={() => handleCheckIngredient(ingredient)}>
                      <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textContainer} onPress={() => handleIngredientOnPress(ingredient)}>
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