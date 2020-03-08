import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import NavigatorOptionsScreen from './../screens/NavigatorOptionsScreen';
import DummyScreen from './../screens/DummyScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Options Test Screen"
            headerMode="screen"
            //Default options to use for the screens in the navigator.
            screenOptions={{
                title: "Title set in navigator options",
                headerTransparent: true,
                // ...etc, Applicable for all screen options listed below
                // once defined here, they become options for all screens
            }}
        >
            <Stack.Screen 
                name="Options Test Screen"
                component={NavigatorOptionsScreen}
                mode="modal"
                // options
                options={{
                    title: "Title set in screen options",
                    headerTransparent: false,
                }}

            />
            <Stack.Screen 
                name="Dummy Screen"
                component={DummyScreen}
            />
        </Stack.Navigator>
    );
}

export default Navigation;
