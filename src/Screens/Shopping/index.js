import { useState } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';

import { Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { isEmpty } from 'lodash-es';

import styles from './styles';

export default function Shopping() {
  const [input, setInput] = useState('');
  const [ingredients, setIngredients] = useState({});
  const [boughtIngredients, setBoughtIngredients] = useState({});

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View>
        <View
          style={styles.inputContainer}
        >
        <TextInput
          style={styles.input}
          placeholder='Add item'
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
                  <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.ingredientQuantity}>{quantity > 1 && `(${quantity})`}</Text>
                <Text style={styles.ingredient}>{ingredient}</Text>
              </View>
            )
          }}
        />
        <View>
          <Text style={styles.boughtIngredientsHeader}>{!isEmpty(boughtIngredients) && 'Bought'}</Text>
          <FlatList
            data={Object.entries(boughtIngredients)}
            renderItem={({item}) => {
              const [boughtIngredient, quantity] = item;

              return (
                <View>
                  <View style={styles.boughtIngredientsContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        setBoughtIngredients(currState => {
                          const newState = {...currState};
                          delete newState[boughtIngredient];
                          return newState;
                        });

                        setIngredients({
                          ...ingredients,
                          [boughtIngredient]: quantity,
                        })
                      }}
                    >
                      <Ionicons name="checkbox-outline" size={24} color="dimgray" />
                    </TouchableOpacity>
                    <Text style={styles.boughtIngredientQuantity}>{quantity > 1 && `(${quantity})`}</Text>
                    <Text style={styles.boughtIngredient}>{boughtIngredient}</Text>
                  </View>
                </View>
              )
            }}
          />
        </View>
      </View>
    </View>
  );
}