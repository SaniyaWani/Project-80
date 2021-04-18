import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen'
import Exchange from './screens/Exchange';
import {Image} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import customSidebarMenu from './components/customSidebarMenu';
import SettingScreen from './screens/SettingScreen';



export default function App() {
  return (
    <AppContainer/>
  );
}


const TabNavigator = createBottomTabNavigator({
  HomeScreen: {screen: HomeScreen},
  Exchange: {screen: Exchange},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "HomeScreen"){
        return(
          <Image
          source={require("./assets/home.png")}
          style={{width:20, height:20}}
        />
        )

      }
      else if(routeName === "Exchange"){
        return(
          <Image
          source={require("./assets/exchange.png")}
          style={{width:20, height:20,}}
        />)

      }
    }
  })
}
);

const AppDrawerNavigator = createDrawerNavigator({
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

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer : {screen: AppDrawerNavigator},
  BottomTab:{screen: TabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);