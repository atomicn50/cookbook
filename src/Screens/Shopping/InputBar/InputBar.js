import { useMemo } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList } from 'react-native';

import { Feather } from '@expo/vector-icons';

import Autocomplete from '../Autocomplete/Autocomplete';
import ingredients from '../../../constants/ingredients';
import styles from '../styles';

export default function InputBar({ handleInputChange, onPress, input, handleAutocompleteOnPress }) {
  const data = useMemo(() => (
    ingredients
      .filter(i => i.startsWith(input))
      .slice(0, 3)
  ), [ingredients, input]);

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          style={styles.input}
          placeholder='Add item'
          onChangeText={(i) => handleInputChange(i)}
          clearButtonMode='while-editing'
          autoCapitalize='none'
        />
        <TouchableOpacity
          testID='add-ingredient-button'
          disabled={!input}
          onPress={onPress}
          style={styles.inputButton}
        >
          <Feather
            name="plus-circle"
            size={26}
            color={input ? 'orangered' : 'gray'}
          />
        </TouchableOpacity>
      </View>
      <Autocomplete data={data} onPress={handleAutocompleteOnPress} input={input} />
    </>
  )
}