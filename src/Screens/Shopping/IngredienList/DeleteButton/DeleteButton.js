import { TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from '../styles';

export default function DeleteButton({ onPress, testID }) {
  return (
    <View testID={testID} style={styles.deleteButtonBottom}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity accessibilityRole="button" onPress={onPress} style={styles.button}>
          <Feather name="minus-circle" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
}