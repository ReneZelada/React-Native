import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button} from 'react-native-elements';

import t from "tcomb-form-native"
const Form =t.form.Form
import {LoginStruct, LoginOptions} from "./App/Components/Forms/testForm";



export default class App extends React.Component {

constructor() {
  super();
this.state ={
  testFormValue:{
    user: "",
    password: ""
  }
};
}

  sendFormTest = () => {
    const validate = this.refs.formTest.getValue();
    if(Validate){
      console.log("Login Correcto");
    }else{
      console.log("Login incorrecto");
    }

    }

    onChange =(testFormValue) =>{
    this.setState({
      testFormValue
    });
    }

  render(){

    const { testFormValue } = this.state;

  return (
    <View style={styles.container}>
     <Form
     ref="formTest"
     type={LoginStruct}
     option={LoginOptions}
     value={testFormValue}
     onChange={v => this.onChange(v)}
     />
     <Button 
     title="Login"
     onPress={this.sendFormTest.bind(this)}
     />
    </View>
  );
}
}

buttonOnClick =(value) =>{
console.log(`Button pressed: ${value}`)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 44,
    paddingRight: 44
  }
});
