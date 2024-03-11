import { View, TextInput, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from '../styles';

export default function InputBar({ handleInputChange, onPress, input }) {
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
    </>
  )
}