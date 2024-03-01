import { StyleSheet } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { Home, CreateRecipe, Shopping } from './src/Screens/Screens';
import { HOME, CREATE_RECIPE, SHOPPING } from './src/Screens/constants';

const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Screen
          name={HOME}
          component={Home}
          options={{
            tabBarIcon: () => (
              <Ionicons name="home-outline" size={28} color="black" />
            )
          }}
        />
        <Screen
          name={CREATE_RECIPE}
          component={CreateRecipe}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="pot-steam-outline" size={28} color="black" />
            )
          }}
        />
        <Screen
          name={SHOPPING}
          component={Shopping}
          options={{
            tabBarIcon: () => (
              <Feather name="shopping-cart" size={28} color="black" />
            )
          }}
        />
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
