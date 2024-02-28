import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function ClearListButton() {
  return (
    <View style={styles.clearListButtonContainer}>
      <TouchableOpacity style={styles.clearListButton}>
        <Text style={styles.clearListText}>Clear List</Text>
      </TouchableOpacity>
    </View>
  )
}