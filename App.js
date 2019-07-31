import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { Button, Text,TextInput, StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Navigator from './navigation/MainTabNavigator';
const stylish = require('./assets/styles/Stylish');

export default function App(props) {
  return (
    <Navigator/>
  )
}

