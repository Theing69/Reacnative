import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image,TouchableOpacity,Alert,Switch} from 'react-native';
import React,{useState} from 'react';

export default function App() {
  // Estado para controlar si el switch está activado o desactivado
  const [isEnabled, setIsEnabled] = useState(false);

  // Función para alternar el valor del switch
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Text>Bienvenidos a react nativa</Text>
      <Text>Amigos y seguidores del canal</Text>
      <Text style={styles.textStyle}>Texto con estilo</Text>
      <Text style={styles.texto}>TEXTO NUEVO CON ESTILO</Text>
      
      
      <View style={styles.segundobloque}>
       <Text style={styles.textosegundo}>Hola segundo bloque</Text>
       <Button title="Presioname" onPress={()=>alert("AL PRESIONAR BAJA LA OPACIDAD")}/>

        <Image source={require('./assets/imagen_nueva.jpeg')}
        style={styles.logo}/>
    </View>
     <TouchableOpacity 
        style={styles.boton}
        activeOpacity={0.3} // Baja la opacidad al 30% al presionar
        onPress={() => Alert.alert('¡Hola!')}
      >
        <Text style={styles.textoBoton}>Opacidad</Text>
      </TouchableOpacity>
        <View style={styles.switch}> 
      <Text style={styles.textStyle}>INTERRUPTOR</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#0080FF' : '#f4f3f4'}    
        onValueChange={toggleSwitch}                        
        value={isEnabled} 
        />
        </View>
    <StatusBar style="auto" />
    </View>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    color:'#FFFFFF',
    fontSize:24
  },
  texto:{
   fontFamily:'Arial',
   color:'red',
   fontStyle:'italic',
   fontSize:15
  },
  segundobloque:{
    backgroundColor: '#FFFF00', // El amarillo
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginVertical: 15, // Le da espacio arriba y abajo para que la sombra se vea

    // --- PROPIEDADES DE SOMBRA PARA iOS (iPhone) ---
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6, // Incrementado para notar más la caída
    },
    shadowOpacity:1, // Opacidad más marcada para probar
    shadowRadius: 10,
  },
  textosegundo:{
    fontSize:15,
    color:'black',
  },
  logo:{
    width:120,
    height:120,
    resizeMode:'contain',
    borderRadius:15
  },
  textoBoton:{
    color:'#FFFF',
    fontSize:15,
    fontWeight:'bold'
  },
  switch:{
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'black',
    alignItems:'center',
    gap:10,
    borderRadius:10
  }
  
});
