import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FriendsScreen from './FriendsScreens';
import MarvelCharactersScreen from './MarvelCharactersScreen'; // Asegúrate de que este import sea correcto según tu estructura de archivos

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Friends" component={FriendsScreen} />
        <Stack.Screen name="Marvel Characters" component={MarvelCharactersScreen} options={{ title: 'Marvel Characters' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
