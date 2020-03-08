import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Title, Container, Button, Text } from 'native-base';
import BaseStyles from './../baseStyles.js';

// Screens
import { default as TabBarNavigator } from './helloTabBar.js' 

const Navigation = () => {

    const [isLogged, setIsLogged] = useState(false);

    const LoginScreen = () => {
        return (
            <Container style={BaseStyles.screenLayout}>
                <Title>Log In</Title>
                <Button
                    onPress={() => {
                        setIsLogged(true);
                    }}
                >
                    <Text>Login</Text>
                </Button>
            </Container>
        );
    };

    const RootStack = createStackNavigator();

    return (
        <RootStack.Navigator headerMode="none">
            {
                !isLogged 
                ? <RootStack.Screen 
                    name="Login"
                    component={LoginScreen}
                />
                : <RootStack.Screen
                    name="Home"
                    component={TabBarNavigator}
                />
            }
        </RootStack.Navigator>
    );
}

export default Navigation;
