import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Button, Text,TextInput, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const stylish = require('../assets/styles/Stylish');

export default function (props) {

  return (<View styles={{marginTop: 80}}>
    <Text style={{color:'#1e90ff',marginTop:70,textAlign:'center', fontSize: 40}}>
        Sign In
      </Text>
      <View style={{marginTop: 120}}>
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
        title='Sign In'
      />
      </View>
      <Text style ={{textAlign:'center', color: 'purple'}}
        onPress ={()=>{props.navigation.navigate('Register')}}
      > 
        Register
      </Text>
    </View>)
}

