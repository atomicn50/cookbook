import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { isEmpty } from 'lodash-es';

import styles from './styles';

export default function BoughtIngredients({
  boughtIngredients,
  setIngredients,
}) {
  return (
    <View>
      <Text style={styles.boughtIngredientsHeader}>{!isEmpty(boughtIngredients) && 'Bought'}</Text>
      <FlatList
        data={boughtIngredients}
        renderItem={({item}) => {
          const [ingredient, { quantity }] = item;

          return (
            <View>
              <View style={styles.boughtIngredientsContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setIngredients(prevIngredients => ({
                      ...prevIngredients,
                      [ingredient]: {
                        ...prevIngredients[ingredient],
                        hasIngredientBeenBought: false,
                      },
                    }));
                  }}
                >
                  <Ionicons name="checkbox-outline" size={24} color="dimgray" />
                </TouchableOpacity>
                <Text style={styles.boughtIngredientQuantity}>{quantity > 1 && `(${quantity})`}</Text>
                <Text style={styles.boughtIngredient}>{ingredient}</Text>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

