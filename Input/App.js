import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  return (
    <View style={styles.container}>
      <Avatar rounded size ='xlarge' source={{
    uri:
      'https://api.adorable.io/avatars/190/abott@adorable.png',
  }}
/>
      <Text style={styles.text}>
        Hola mundo!</Text>
        <Input
  placeholder='INPUT WITH ICON'
    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}/>
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
