import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import TransactionScreen from '../screens/TransactionScreen';

/*Don't use this */
import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';


const Navigation = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Register:{
    screen: RegisterScreen
  },

}

);


export default createAppContainer(Navigation);
