import React from 'react';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';

// Screens
import HelloReactNavigationScreen from './../screens/HelloReactNavigationScreen';
import DummyScreen from './../screens/DummyScreen';

// createBottomTabNavigator is a function that returns an object containing 2 properties: Screen and Navigator.
const Tab  = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Screen 1" component={HelloReactNavigationScreen} />
            <Tab.Screen name="Screen 2" component={DummyScreen} />
        </Tab.Navigator>
    );
}

export default Navigation;