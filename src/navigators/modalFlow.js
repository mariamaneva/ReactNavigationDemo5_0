import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';

// Screens
import OpenModalScreen from './../screens/OpenModalScreen';
import ModalScreen from './../screens/ModalScreen'; 


const RootStack = createStackNavigator();
const MainStack =  createBottomTabNavigator();

function MainStackScreen() {
    return (
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={OpenModalScreen} />
        <MainStack.Screen name="Details" component={OpenModalScreen} />
      </MainStack.Navigator>
    );
  }

const Navigation = () => {
    return (
        <RootStack.Navigator
            headerMode="none"
        >
            <RootStack.Screen 
                name="Main"
                component={MainStackScreen}
            />
            <RootStack.Screen
                mode="modal"
                name="Modal"
                component={ModalScreen}
            />
        </RootStack.Navigator>
    );
}

export default Navigation;
