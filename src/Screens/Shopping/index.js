import { useState } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';

import { Fontisto, Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  ingredientContainer: {
    flexDirection: 'row',
  },
  boughtIngredientsContainer: {
    flexDirection: 'row',
  },
});


export default function Shopping() {
  const [input, setInput] = useState('');
  const [ingredients, setIngredients] = useState({});
  const [boughtIngredients, setBoughtIngredients] = useState({});

  return (
    <View>
      <View
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder='ingredient'
          onChangeText={(i) =>setInput(i)}
        >
        </TextInput>
        <TouchableOpacity
          onPress={() => {
            if (input && ingredients[input]) {
              setIngredients({
                ...ingredients,
                [input]: ingredients[input] + 1
              });
            } else {
              setIngredients({...ingredients, [input]: 1});
            }
          }}
        >
          <Fontisto name="shopping-basket-add" size={24} color="black" />
        </TouchableOpacity>
        </View>
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
                  <Fontisto name="checkbox-passive" size={24} color="black" />
                </TouchableOpacity>
                <Text>{quantity > 1 && `(${quantity})`}</Text>
                <Text>{ingredient}</Text>
              </View>
            )
          }}
        />
        <View>
          <FlatList
            data={Object.entries(boughtIngredients)}
            renderItem={({item}) => {
              const [boughtIngredient, quantity] = item;

              return (
                <View>
                  <Text>Bought</Text>
                  <View style={styles.boughtIngredientsContainer}>
                    <TouchableOpacity>
                      <Ionicons name="checkbox-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <Text>{quantity > 1 && `(${quantity})`}</Text>
                    <Text>{boughtIngredient}</Text>
                  </View>
                </View>
              )
            }}
          />
        </View>
    </View>
  );
}