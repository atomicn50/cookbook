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

import BoughtIngredients from './BoughtIngredients';
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
        <BoughtIngredients
          ingredients={ingredients}
          setIngredients={setIngredients}
          boughtIngredients={boughtIngredients}
          setBoughtIngredients={setBoughtIngredients}
        />
      </View>
    </View>
  );
}