import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  const [visits, setVisits] = useState(0);  

  const handlePress = () => {
    setVisits(visits + 1); 
    navigation.navigate('Friends');  
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>Visitas a tus amigos: {visits}</Text>
      <Button
        title="Ve a ver tus amigos"
        onPress={handlePress}
      />
    </View>
  );
}

export default HomeScreen;
