import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Switch } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [isOn,setOn]=useState<boolean>(false);
  return (
    <View style={styles.container}>
      <View style={[styles.luz,{backgroundColor:isOn?"yellow":"gray"}]}/>
      <Switch value={isOn} onValueChange={setOn}/>
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
  luz:{
    width:100,
    height:100,
    borderRadius:50,
    marginBottom:20,
  }
});
