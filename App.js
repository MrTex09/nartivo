import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';  // Importing MaterialIcons
import HomeScreen from './HomeScreen';
import FriendsScreen from './FriendsScreen';
import MarvelCharactersScreen from './MarvelCharactersScreen';
const Tab = createBottomTabNavigator();
import MarvelIcon from './MarvelIcon';

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: 'black',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Friends" 
          component={FriendsScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="people" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Marvel Characters"
          component={MarvelCharactersScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MarvelIcon width={size} height={size} fill={color} />
            ),
            tabBarLabel: () => null  // Elimina el texto de la etiqueta
          }}
        />


      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
