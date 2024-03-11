import { useMemo } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import Autocomplete from '../Autocomplete/Autocomplete';
import ingredients from '../../../constants/ingredients';
import styles from '../styles';

const MINIMUM_INPUT_LENGTH_TO_SHOW_AUTOCOMPLETE = 2;

export default function InputBar({ handleInputChange, onPress, input, handleAutocompleteOnPress }) {
  const data = useMemo(() => (
    ingredients
      .filter(i => input?.length > 1 && i.startsWith(input))
      .slice(0, 3)
  ), [ingredients, input]);

  const inputMatchesOnlyItemInAutocomplete = useMemo(() => (
    (input && input === data[0])
      && data.length === 1
  ), [input, data]);

  const hideAutocomplete = useMemo(() => (
    inputMatchesOnlyItemInAutocomplete
      || input.length < MINIMUM_INPUT_LENGTH_TO_SHOW_AUTOCOMPLETE
  ), [input, data])
  console.log('hideAutocomplete', hideAutocomplete)

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
      <Autocomplete
        data={data}
        onPress={handleAutocompleteOnPress}
        input={input}
        hideAutocomplete={hideAutocomplete}
      />
    </>
  )
}