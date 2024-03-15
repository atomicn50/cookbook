import { TouchableOpacity, View, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
  deleteButtonBottom: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 50,
  },
});

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