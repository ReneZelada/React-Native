import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hola mundo!</Text>
        <Button title="Solid Button" onPress={()=>this.buttonOnClick("Hola Mundo")}/>
    </View>
  );
}

buttonOnClick =(value) =>{
console.log(`Button pressed: ${value}`)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  }
});
