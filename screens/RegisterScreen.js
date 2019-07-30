
import React, { useState } from 'react';
import { Platform, Text,TextInput, Button, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
const stylish = require('./assets/styles/Stylish');

export default function App(props) {
  return (<View>
    <Text style={{color:'#1e90ff',marginTop:40,textAlign:'center', fontSize: 40}}>
        Register
      </Text>
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
        Register
      />
    </View>)
}
