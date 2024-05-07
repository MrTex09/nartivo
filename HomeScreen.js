import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from './HomeScreenStyles'; // Asegúrate de que la ruta al archivo de estilos es correcta

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
        <Text style={styles.headerText}>Home Screen</Text>
      </View>

      {/* Contenido central */}
      <View style={styles.content}>
        <Text style={styles.title}>Visitas a tus amigos: {visits}</Text>
        <Button
          title="Ve a ver tus amigos"
          onPress={handlePress}
          style={styles.button} // Estilo aplicado al botón (asegúrate que React Native Button acepta este estilo directamente)
        />
        <Button
          title="Ver personajes de Marvel"
          onPress={() => navigation.navigate('Marvel Characters')}
          color="red" // Esto colorea el texto del botón en iOS, para Android puedes requerir ajustes adicionales
        />
      </View>

    </View>
  );
}
