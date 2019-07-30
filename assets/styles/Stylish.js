import {StyleSheet} from 'react-native'
import { NativeModulesProxy } from '@unimodules/core';
import { isModuleDeclaration } from '@babel/types';

module.exports = StyleSheet.create({
    input : {
        textAlign: 'center',
        borderColor: '#1e90ff',
        borderBottomWidth: 1,
        height: 40,
    },
})