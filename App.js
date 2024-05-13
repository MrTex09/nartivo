import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import FriendsScreen from './pages/FriendsScreens'; 
import MarvelCharactersScreen from './pages/MarvelCharactersScreen'; 
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

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
              <Icon name="star" size={size} color={color} /> 
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
