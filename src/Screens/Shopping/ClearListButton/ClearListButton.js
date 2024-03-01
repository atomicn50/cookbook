import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../styles';

export default function ClearListButton({ onPress }) {
  return (
    <View style={styles.clearListButtonContainer}>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={onPress}style={styles.clearListButton}>
          <Text style={styles.clearListText}>Clear Shopping List</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}