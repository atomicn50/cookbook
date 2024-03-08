import { FlatList, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  autocompleteContainer: {
    position: 'absolute',
    top: 60,
    left: 15,
    right: 0,
    zIndex: 1,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'silver',
  },
  result: {
    padding: 4
  },
  text: {
    fontSize: 18
  }
})

export default function Autocomplete({ input, data, onPress}) {
  return (
    <View style={styles.autocompleteContainer}>
      <FlatList
        data={input ? data : []}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPress(item)} style={styles.result}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}