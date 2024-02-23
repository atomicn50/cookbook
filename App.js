import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Home from './src/Screens/Home';
import CreateRecipeScreen from './src/Screens/CreateRecipe';
import { HOME, CREATE_RECIPE } from './src/Screens/constants';

const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Screen
          name={HOME}
          component={Home}
          options={{
            tabBarIcon: () => (<Ionicons name="home-outline" size={28} color="black" />)
          }}
        />
        <Screen
          name={CREATE_RECIPE}
          component={CreateRecipeScreen}
          options={{
            tabBarIcon: () => (<MaterialCommunityIcons name="pot-steam-outline" size={28} color="black" />)
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
