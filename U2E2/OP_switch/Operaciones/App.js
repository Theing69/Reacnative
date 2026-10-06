import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Switch,TextInput } from 'react-native';

export default function App() {
  const [number1,setNumber1]=useState('');
  const [number2,setNumber2]=useState('');
  const [suma,setSum]=useState(null);
  const [multi,setmulti]=useState(null);
  const [div,setdiv]=useState(null);
  const [onsuma,setOnsuma]=useState(null);
  const [onmulti,setOnmulti]=useState(null);
  const [ondiv,setOndiv]=useState(null);
  const Switchsuma=(valor)=>{
    setOnsuma(valor);
    if(valor){
      hacersuma();
    }else{
      setSum(null);
    }
  }
  const Switchmulti=(valor)=>{
    setOnmulti(valor);
    if(valor){
      hacermulti();
    }else{
      setmulti(null);
    }
  }
   const Switchdiv=(valor)=>{
    setOndiv(valor);
    if(valor){
      hacerdiv();
    }else{
      setOndiv(null);
    }
  }
  const hacersuma=()=>{
    const num1=parseFloat(number1);
    const num2=parseFloat(number2);
    if(!isNaN(num1) && !isNaN(num2)){
      setSum(num1+num2);
    }else{
      alert("Ingresa numeros validos");
    }
  }
  const hacermulti=()=>{
    const num1=parseFloat(number1);
    const num2=parseFloat(number2);
    if(!isNaN(num1) && !isNaN(num2)){
      setmulti(num1*num2);
    }else{
      alert("Ingresa numeros validos");
    }
  }
  const hacerdiv=()=>{
    const num1=parseFloat(number1);
    const num2=parseFloat(number2);
    if(!isNaN(num1) && !isNaN(num2)){
      setdiv(num1/num2);
    }else{
      alert("Ingresa numeros validos");
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingresa el primer numero: </Text>
      <TextInput
      style={styles.input}
      keyboardType='numeric'
      value={number1}
      onChangeText={setNumber1}/>

      <Text style={styles.label}>Ingresa el segundo numero: </Text>
      <TextInput
      style={styles.input}
      keyboardType='numeric'
      value={number2}
      onChangeText={setNumber2}/>
       <Text>Suma:</Text>
      <Switch value={onsuma} onValueChange={Switchsuma}/>
      {suma !== null && (
        <Text style={styles.result}>La suma es: {suma}</Text>
      )}
      <Text>Multiplicacion:</Text>
      <Switch value={onmulti} onValueChange={Switchmulti}/>
      {multi !== null && (
        <Text style={styles.result}>La multiplicacion es: {multi}</Text>
      )}
      <Text>Division:</Text>
      <Switch value={ondiv} onValueChange={Switchdiv}/>
      {div !== null && (
        <Text style={styles.result}>La division es: {div}</Text>
      )}
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
  label:{
    fontSize:18,
    marginBottom:8,
  },
  input:{
    heigh:40,
    borderColor:'gray',
    borderWidth:1,
    width:'80%',
    marginBottom:16,
    paddingHorizontal:8,
  },
  result:{
    fontSize:24,
    marginTop:20,
    fontWeight:'bold',
  }
});
