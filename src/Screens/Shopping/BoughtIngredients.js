import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { isEmpty } from 'lodash-es';

import styles from './styles';

export default function BoughtIngredients({
  ingredients,
  boughtIngredients,
  setIngredients,
  setBoughtIngredients
}) {
  return (
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
  )
}

