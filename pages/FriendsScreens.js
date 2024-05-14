import React from 'react';
import { View, Text, Button } from 'react-native';

export default function FriendsScreen({ navigation }) {  // Asegúrate de pasar 'navigation' como prop
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Lista de amigos</Text>
      <Text>Laios</Text>
      <Text>Marcille</Text>
      <Text>Rodrigo</Text>
      <Text>Milanesa</Text>
      <Button
        title="Ve a la pantalla principal"
        onPress={() => navigation.navigate('Home')}  // Corrige el nombre de la ruta
      />
    </View>
  );
}


