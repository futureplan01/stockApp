
import React, { Component } from 'react';
import axios from 'axios';
import {  Text,TextInput, Button, View } from 'react-native';
const stylish = require('../assets/styles/Stylish');

class RegisterScreen extends Component{

  constructor(props){
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      error: false
    }

    this.registerUser=this.registerUser.bind(this);
  }

  registerUser(){
    axios.post('https://my-stock-app.herokuapp.com/Register',{
      crossDomain:true,
      name: this.state.name,
      email: this.state.email.toLowerCase(),
      password: this.state.password
  })
  .then((user)=>{
      if(user){
        console.log("Success");
        this.props.navigation.navigate('Home');
      }
  }).catch((err)=>{
    console.log("FAILURE");
    console.log(err);
    this.setState({error: true});
   })
  }
  render(){
    let ErrorMessage;
    if(this.state.error){
      ErrorMessage = <Text style={{color:'red', textAlign:'center'}}> 
        Email Already Taken, Try Again
      </Text>
    }
    return (<View styles={{marginTop: 80}}>
      <Text style={{color:'#1e90ff',marginTop:70,textAlign:'center', fontSize: 40}}>
          Register
        </Text>
        {ErrorMessage}
        <View style={{marginTop: 80}}>
        <TextInput
          style={stylish.input}
          placeholder = 'Name'
          onChangeText = {(value)=>{this.setState({name: value})}}
        />
        <TextInput
          style={stylish.input}
          placeholder = 'Email'
          onChangeText = {(value)=>{this.setState({email: value})}}
        />
        <TextInput
          style={stylish.input}
          placeholder = 'Password'
          secureTextEntry ={true}
          onChangeText = {(value)=>{this.setState({password: value})}}
        />
        <Button
          style={{marginTop: 40}}
          title='Register'
          onPress={this.registerUser}
        />
        </View>
      </View>)
  }

}

export default RegisterScreen