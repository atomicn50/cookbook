import { View, TextInput, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from '../styles';

export default function InputBar({ onChangeText, onPress }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder='Add item'
        onChangeText={(i) =>onChangeText(i)}
        clearButtonMode='while-editing'
      />
      <TouchableOpacity testID='add-ingredient-button' onPress={onPress} style={styles.inputButton}>
        <Feather name="plus-circle" size={26} color="orangered" />
      </TouchableOpacity>
    </View>
  )
}