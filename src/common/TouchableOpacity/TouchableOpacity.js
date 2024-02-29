import { TouchableOpacity } from 'react-native';

export default function CommonTouchableOpacity({
  onPress,
  children,
  ...restProps
}){
  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityRole="button"
      {...restProps}
    >
      {children}
    </TouchableOpacity>
  )
}