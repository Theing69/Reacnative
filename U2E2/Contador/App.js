import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const [count,setcount]=useState(0);
  const updateCount=()=>{
    setcount(count+1)
  }
  return (
    <View style={styles.container}>
      <Text>Yout pressed the button {count} times</Text>
      <Button title="Pres me" onPress={updateCount}/>
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
});
