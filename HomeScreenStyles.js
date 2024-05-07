import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    padding: 20, // Espacio ajustado para ser realista
  },
  marvelButton: {
    backgroundColor: 'red', // Estilo para el botón de Marvel
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
    margin: 10, // Margen añadido para espaciado
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

});

export default styles;
