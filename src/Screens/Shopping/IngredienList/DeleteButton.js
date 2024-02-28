import { Text, TouchableOpacity, View } from 'react-native';

export default function DeleteButton({ onPress }) {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'flex-end', marginRight: 60}}>
        <TouchableOpacity onPress={onPress}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}