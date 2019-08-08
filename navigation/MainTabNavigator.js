import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import TransactionScreen from '../screens/TransactionScreen';


const Navigation = createStackNavigator({
  Home: {
    screen: PortfolioScreen
  },
  Register:{
    screen: RegisterScreen
  },
  Portfolio:{
    screen: PortfolioScreen
  }

}

);


export default createAppContainer(Navigation);
