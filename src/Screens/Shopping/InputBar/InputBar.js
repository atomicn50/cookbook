import { useMemo } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import AutocompleteInput from 'react-native-autocomplete-input';
import { Feather } from '@expo/vector-icons';

import ingredients from '../../../constants/ingredients';
import styles from '../styles';

export default function InputBar({ handleInputChange, onPress, input, handleAutocompleteOnPress }) {
  const filteredData = useMemo(() => (
    ingredients
      .filter(i => i.startsWith(input))
      .slice(0, 3)
  ), [ingredients, input]);

  return (
    <View style={styles.inputContainer}>
      {/* <TextInput
        style={styles.input}
        placeholder='Add item'
        onChangeText={(i) =>onChangeText(i)}
        clearButtonMode='while-editing'
      /> */}
      <AutocompleteInput
        placeholder='Add item'
        value={input}
        autoCapitalize='none'
        onChangeText={(i) => handleInputChange(i)}
        data={input ? filteredData : []}
        containerStyle={styles.autocompleteContainer}
        renderResultList={({ data }) => {
          return (
            data.map(item => (
              <TouchableOpacity
              onPress={() => {
                handleAutocompleteOnPress(item)
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
            ))
          )
        }}
    
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
  )
}