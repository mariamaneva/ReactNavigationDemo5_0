import React from 'react';
// import {
//     NavigationContainer,
//     //optional - hooks to get the state and route
//     useRoute,
//     useNavigationState
// } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import SetParamsScreen from './../screens/SetParamsScreen';
import ReceiveParamsScreen from './../screens/ReceiveParamsScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Set a param"
                component={SetParamsScreen}
            />
            <Stack.Screen 
                name="Receive a param"
                initialParams={{test: "initial param"}}
                component={ReceiveParamsScreen}
                options={({route})=> ({
                  title: `param title: ${route.params.test}`
                })}
            />
        </Stack.Navigator>
    );
}

export default Navigation;
