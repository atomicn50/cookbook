import { FlatList, Pressable, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  autocompleteContainer: {
    position: 'absolute',
    top: 65,
    left: 20,
    right: 0,
    zIndex: 1,
    backgroundColor: 'white'
  }
})

export default function Autocomplete({ input, data, onPress}) {
  return (
    <View style={styles.autocompleteContainer}>
      <FlatList
        data={input ? data : []}
        renderItem={({ item }) => (
          <Pressable onPress={() => onPress(item)}>
            <Text>{item}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}