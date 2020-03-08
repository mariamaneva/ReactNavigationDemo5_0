import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import ScreenOne from './../screens/ScreenOne';
import ScreenTwo from './../screens/ScreenTwo';
import ScreenThree from './../screens/ScreenThree';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Screen One"
                component={ScreenOne}
            />
            <Stack.Screen
                name="Screen Two"
                component={ScreenTwo}
            />
            <Stack.Screen
                name="Screen Three"
                component={ScreenThree}
            />
        </Stack.Navigator>
    );
}

export default Navigation;
