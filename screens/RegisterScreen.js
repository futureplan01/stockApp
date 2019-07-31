
import React, { useState } from 'react';
import {  Text,TextInput, Button, View } from 'react-native';
const stylish = require('../assets/styles/Stylish');


export default function App(props) {
  return (<View styles={{marginTop: 80}}>
    <Text style={{color:'#1e90ff',marginTop:70,textAlign:'center', fontSize: 40}}>
        Register
      </Text>
      <View style={{marginTop: 80}}>
      <TextInput
        style={stylish.input}
        placeholder = 'Name'
      />
      <TextInput
        style={stylish.input}
        placeholder = 'Email'
      />
      <TextInput
        style={stylish.input}
        placeholder = 'Password'
        secureTextEntry ={true}
      />
      <Button
        style={{marginTop: 40}}
        title='Register'
      />
      </View>
    </View>)
}
