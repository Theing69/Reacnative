import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';

export default function App() {
  const [message,setMessage]=useState('');
  const showMessage=()=>{
    setMessage('Hola mundo');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Button title="Mostrar mensaje" onPress={showMessage}/>
      <TouchableOpacity
      style={styles.button}
      onPress={showMessage}>
        <Text style={styles.text} onPress={showMessage}>Click me</Text>
      </TouchableOpacity>
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
  message:{
    fontSize:24,
    marginBottom:20,
  },
  button:{
   marginBottom:20,
   backgroundColor:'blue',
   padding:10,
   borderRadius:5,
  },
  text:{
    color:'white',
  },
});
