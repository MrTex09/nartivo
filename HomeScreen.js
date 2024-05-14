import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Definición del componente HomeScreen
export default function HomeScreen({ navigation }) {
  const [visits, setVisits] = useState(0);

  const handlePress = () => {
    setVisits(visits + 1);
    navigation.navigate('Friends');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Pantalla Principal</Text>
      </View>

      {/* Contenido central */}
      <View style={styles.content}>     
        <Text style={styles.title}>Visitas a tus amigos: {visits}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Ve a ver tus amigos"
            onPress={handlePress}
            color={styles.friendsButton.color} // Color del botón
          />
          <Button
            title="Ve al users"
            onPress={() => navigation.navigate('users')}
            color={styles.friendsButton.color} // Color del botón
          />
          <Button 
            title="Ver personajes de Marvel"
            onPress={() => navigation.navigate('Marvel Characters')}
            color={styles.marvelButton.color} // Color del botón
          />
        </View>
      </View>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#4682b4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row', // Ajusta los botones horizontalmente
    justifyContent: 'space-around', // Espaciado entre botones
    width: '100%', // Asegura que el contenedor utilice todo el ancho disponible
    paddingHorizontal: 0, // Añade algo de espacio horizontalmente
  },
  friendsButton: {
    color: "blue", // Color para el botón de amigos
  },
  marvelButton: {
    color: 'red', // Color para el botón de Marvel, se cambió backgroundColor por color
  },
});
