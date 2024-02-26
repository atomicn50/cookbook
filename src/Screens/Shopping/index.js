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

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 315,
    marginHorizontal: 12,
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: 'whitesmoke'
  },
  ingredientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    margin: 4,
  },
  ingredient: {
    fontSize: 18,
  },
  ingredientQuantity: {
    padding: 2,
    fontSize: 18,
  },
  boughtIngredientsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginBottom: 8,
  },
  boughtIngredientsHeader: {
    margin: 12,
    fontSize: 20,
    color: 'orangered',
    fontWeight: 'bold'
  },
  boughtIngredientQuantity: {
    padding: 2,
    fontSize: 18,
    color: 'dimgray',
    textDecorationLine: 'line-through',
  },
  boughtIngredient: {
    fontSize: 18,
    color: 'dimgray',
    textDecorationLine: 'line-through',
  },
});


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