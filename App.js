import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { Home, CreateRecipe, Shopping } from './src/Screens/Screens';
import { HOME, CREATE_RECIPE, SHOPPING } from './src/constants/screens';
import COLORS from './src/colors/colors';

const { Navigator, Screen } = createBottomTabNavigator();

const TAB_ICON_SIZE = 28;

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({ route }) => {
          const { name } = route;
             
          return {
            headerStyle: {
              shadowRadius: 3,
            },
            tabBarActiveTintColor: COLORS.PRIMARY,
            tabBarInactiveTintColor: COLORS.INACTIVE,
            tabBarIcon: ({ focused }) => {
              const commonStyles = {
                size: TAB_ICON_SIZE,
                color: focused ? COLORS.PRIMARY : COLORS.INACTIVE,
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
            tabBarStyle: {
              shadowOpacity: 0.05
            },
            tabBarLabelStyle: {
              fontSize: 12,
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