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
  resultsContainer: {
    padding: 4
  },
  result: {
    flexDirection: 'row',
  },
  bold: {
    fontWeight: '700',
    fontSize: 18,
  },
  text: {
    fontSize: 18
  }
});

const MINIMUM_INPUT_LENGTH_TO_SHOW_AUTOCOMPLETE = 2;

export default function Autocomplete({ input, data, onPress }) {
  const inputMatchesOnlyItemInAutocomplete = (
    (input && input === data[0])
      && data.length === 1
  );
  const hideAutocomplete = (
    inputMatchesOnlyItemInAutocomplete
      || input.length < MINIMUM_INPUT_LENGTH_TO_SHOW_AUTOCOMPLETE
      || data.length === 0
  );

  return (
    !hideAutocomplete && (
      <View style={styles.autocompleteContainer}>
        <FlatList
          data={input ? data : []}
          renderItem={({ item }) => {
            const inputLength = input.length;
            const regular = item.slice(0, inputLength);
            const bold = item.slice(inputLength);

            return (
              <TouchableOpacity onPress={() => onPress(item)} style={styles.resultsContainer}>
                <View style={styles.result}>
                  <Text style={styles.text}>{regular}</Text>
                  <Text style={styles.bold}>{bold}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    )
  );
}