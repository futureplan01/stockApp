import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import axios from 'axios';
import React, { Component } from 'react';
import { Button, Text,TextInput, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const stylish = require('../assets/styles/Stylish');

class HomeScreen extends Component{
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
      error: false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(){
    axios.post('https://my-stock-app.herokuapp.com/SignIn',{
      crossDomain:true,
      email: this.state.email.toLowerCase(),
      password: this.state.password
  })
  .then((user)=>{
      if(user){
        this.props.navigation.navigate('Register',{
          userInfo: user.data
        });
      }
  }).catch((err)=>{
    console.log(err);
    this.setState({error: true});
  })
  }

  render(){
    let ErrorMessage;
    if(this.state.error){
      ErrorMessage = <Text style={{color:'red', textAlign:'center'}}> 
        Wrong Email or Password
      </Text>
    }
    return (<View styles={{marginTop: 80}}>
      <Text style={{color:'#1e90ff',marginTop:70,textAlign:'center', fontSize: 40}}>
          Sign In
        </Text>
        {ErrorMessage}
        <View style={{marginTop: 120}}>
        <TextInput
          style={stylish.input}
          placeholder = 'Email'
          onChangeText = {(value)=>{this.setState({email: value})}}
        />
        <TextInput
          style={stylish.input}
          placeholder = 'Password'
          onChangeText = {(value)=>{this.setState({password: value})}}
          secureTextEntry ={true}
        />
        <Button
          style={{marginTop: 40}}
          title='Sign In'
          onPress = {this.onSubmit}
        />
        </View>
        <Text style ={{textAlign:'center', color: 'purple'}}
          onPress ={()=>{this.props.navigation.navigate('Register')}}
        > 
          Register
        </Text>
      </View>)
  }
}


export default HomeScreen

