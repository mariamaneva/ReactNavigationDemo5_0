import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import NavigationPropScreen from './../screens/NavigationPropScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="The Navigation Prop"
                component={NavigationPropScreen}
            />
        </Stack.Navigator>
    );
}

export default Navigation;
