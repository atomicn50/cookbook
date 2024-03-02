import { StyleSheet } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { Home, CreateRecipe, Shopping } from './src/Screens/Screens';
import { HOME, CREATE_RECIPE, SHOPPING } from './src/constants/screens';

const { Navigator, Screen } = createBottomTabNavigator();

const TAB_ICON_SIZE = 28;
const FOCUSED_COLOR = 'orangered';
const UNFOCUSED_COLOR = 'black';

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({ route }) => {
          const { name } = route;
             
          return {
            tabBarActiveTintColor: 'orangered',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({ focused }) => {
              const commonStyles = {
                size: TAB_ICON_SIZE,
                color: focused ? FOCUSED_COLOR : UNFOCUSED_COLOR,
              };

              switch (name) {
                case HOME:
                  return <Ionicons name="home-outline" {...commonStyles}/>;

                case CREATE_RECIPE:
                  return <MaterialCommunityIcons name="pot-steam-outline" {...commonStyles}/>;

                case SHOPPING: 
                  return <Feather name="shopping-cart" {...commonStyles}/>;
              }
            },
          }
        }}
      >
        <Screen name={HOME} component={Home} />
        <Screen name={CREATE_RECIPE} component={CreateRecipe} />
        <Screen name={SHOPPING} component={Shopping} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
