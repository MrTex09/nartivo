import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

// Definición del componente HomeScreen
export default function HomeScreen({ navigation }) {
  const [visits, setVisits] = useState(0);

  const handlePress = () => {
    setVisits(visits + 1);
    navigation.navigate('Friends');
  };

  return (
    <View>
      <View>     
        <Text>Visitas a tus amigos: {visits}</Text>
        <View>
          <Button
            title="Ve a ver tus amigos"
            onPress={handlePress}
          />
          <Button 
            title="Ver personajes de Marvel"
            onPress={() => navigation.navigate('Marvel Characters')}
          />
        </View>
      </View>
    </View>
  );
}