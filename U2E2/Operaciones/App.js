import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button, } from 'react-native';
import React,{useState} from 'react';

export default function App() {
  const [numer1,setnumber1]=useState('');
  const [numer2,setnumber2]=useState('');
  const [sum,setsum]=useState(null);
  const [multi,setmulti]=useState(null);
  const [resta,setresta]=useState(null);
  const [div,setdiv]=useState(null);
  const handlesum=()=>{
    const num1=parseFloat(numer1);
    const num2=parseFloat(numer2)
    if(!isNaN(num1) && !isNaN(num2)){
      setsum(num1+num2);
     
    }else{
      alert('Porfavor ingresar numeros validos');
    }
  }
  const multip=()=>{
    const num1=parseFloat(numer1);
    const num2=parseFloat(numer2)
    if(!isNaN(num1) && !isNaN(num2)){
      setmulti(num1*num2);
    }else{
      alert('Porfavor ingresar numeros validos');
    }
  }
  const restap=()=>{
    const num1=parseFloat(numer1);
    const num2=parseFloat(numer2)
    if(!isNaN(num1) && !isNaN(num2)){
      setresta(num1-num2);
     
    }else{
      alert('Porfavor ingresar numeros validos');
    }
  }
  const divp=()=>{
    const num1=parseFloat(numer1);
    const num2=parseFloat(numer2)
    if(!isNaN(num1) && !isNaN(num2)){
      setdiv(num1/num2);
     
    }else{
      alert('Porfavor ingresar numeros validos');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingresa el primer numero:</Text>
      <TextInput style={styles.input}
       keyboardType='numeric'
       value={numer1}
       onChangeText={setnumber1}/>

       <Text style={styles.label}>Ingresa el segundo numero:</Text>
       <TextInput style={styles.input}
       keyboardType='numeric'
       value={numer2}
       onChangeText={setnumber2}/>
       
       <Button title='calcular suma' onPress={handlesum}></Button>
        {sum !== null && (<Text style={styles.result}>La suma es:{sum}</Text>)}
       <Button title='calcular Multiplicacion' onPress={multip}/>
       {multi !== null && (<Text style={styles.result}>La multiplicacion es:{multi}</Text>)}
        <Button title='calcular resta' onPress={restap}/>
       {resta !== null && (<Text style={styles.result}>La resta es:{resta}</Text>)}
        <Button title='calcular division' onPress={divp}/>
       {div !== null && (<Text style={styles.result}>La division es:{div}</Text>)}
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
    marginBottom:8
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  result: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
