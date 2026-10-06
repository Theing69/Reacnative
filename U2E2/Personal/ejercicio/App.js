import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [esMayusculas, setEsMayusculas] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Saludo Personalizado</Text>
      {/* TextInput con onChangeText */}
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      {/* Switch con onValueChange */}
      <View style={styles.switchContainer}>
        <Text>¿Mostrar en Mayúsculas?</Text>
        <Switch 
          value={esMayusculas} 
          onValueChange={setEsMayusculas} 
        />
      </View>

      {/* Button con onPress */}
      <Button 
        title="Saludar" 
        onPress={() => setMostrarMensaje(true)} 
      />
      
      {mostrarMensaje && nombre !== '' && (
        <Text style={styles.resultado}>
          ¡Hola, {esMayusculas ? nombre.toUpperCase() : nombre}!
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 15,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});
