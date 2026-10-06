import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default function App() {
  const [nombre,setNombre]=useState("");
  const [saludo,setSaludo]=useState("");
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder='Escribe tu nombre'
      onChangeText={setNombre}/>
      <Button title='Saludar' onPress={() => setSaludo(`Hola,${nombre}!`)}/>
        <Text>{saludo}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    padding:8,
    width:200,
    marginBottom:10,
  },
});
