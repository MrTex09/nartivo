import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './HomeScreen';
import FriendsScreen from './pages/FriendsScreen';
import MarvelCharactersScreen from './pages/MarvelCharactersScreen';
import MarvelIcon from './MarvelIcon';
import usersScreen from './pages/users';
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
          name="users" 
          component={usersScreen}  // Asegúrate de tener el componente correcto aquí si 'users' es diferente de 'FriendsScreen'
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="users" size={size} color={color} />
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
            tabBarLabel: () => null  // Elimina el texto de la etiqueta para la pantalla de Marvel Characters
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
