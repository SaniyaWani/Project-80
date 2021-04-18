import React,{Component}from 'react';
import { View,Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
    
import {createDrawerNavigator} from 'react-navigation-drawer';
import {customSidebarMenu} from './customSidebarMenu';
import {TabNavigator} from '../App';
import SettingScreen from '../screens/SettingScreen';



export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen : TabNavigator,
        
        },
        Settings:{
            screen : SettingScreen,
            
            },
        

        
        
    },
        {
            contentComponent: customSidebarMenu
        },
        {
          initialRouteName : 'Home'
        }
      );