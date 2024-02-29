import { View, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons';

import CommonTouchableOpacity from '../../../common/TouchableOpacity/TouchableOpacity';
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
      <CommonTouchableOpacity onPress={onPress} style={styles.inputButton}>
        <Feather name="plus-circle" size={26} color="orangered" />
      </CommonTouchableOpacity>
    </View>
  )
}