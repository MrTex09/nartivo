import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  const goToFriends = () => {
    navigation.navigate('Friends');
  };

  const goToMarvelCharacters = () => {
    navigation.navigate('Marvel Characters');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bienvenido</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>Home Screen</Text>
        <Button
          title="Ve a ver tus amigos"
          onPress={goToFriends}
          color="#1e90ff"
        /> 
        <Button
          title="Ver personajes de Marvel"
          onPress={goToMarvelCharacters}
          color="#FF0000"
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Mi Aplicación</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',  // Asegura que el header y footer estén en los extremos
  },
  button:{
  padding: 100,
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
  footer: {
    height: 50,
    width: '100%',
    backgroundColor: '#4682b4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  }
});

export default HomeScreen;
