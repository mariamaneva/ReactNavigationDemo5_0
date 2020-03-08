import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HelloReactNavigation from './../screens/HelloReactNavigationScreen';

// createStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator.
const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator
          headerMode="screen"
        >
            <Stack.Screen 
                name="Hello React Navigation Header Text"
                component={HelloReactNavigation}
            />
        </Stack.Navigator>
    );
}

export default Navigation;
