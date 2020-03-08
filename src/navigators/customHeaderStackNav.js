import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import DummyScreen from './../screens/DummyScreen';

//Header component
import { Button, Text } from 'native-base';
import Header from './../components/Header';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Custom Header Component"
        >
            {/* customizing the native header */}
            <Stack.Screen 
                name="Customized Native Header"
                component={DummyScreen}
                options={{
                    headerTitleAlign: "center",
                    headerRight: () => <Button small><Text>Bye</Text></Button>,
                    headerLeft: () => <Button small><Text>Hi!</Text></Button>,
                    headerStyle: {
                        backgroundColor: "#5B658A",
                    },
                    headerTitleStyle: { 
                        color: "white"
                    },
                    headerStatusBarHeight: 50
                }}
            />
            {/* setting opitons based on screen params */}
            <Stack.Screen 
                name="Header Title From Screen Param"
                initialParams={{name: "Title from params"}}
                component={DummyScreen}
                options={({ route }) => ({
                    title: route.params.name
                    // enter the rest of the config options below
                })}
            />
            {/* using custom component for header */}
            <Stack.Screen 
                name="Custom Header Component"
                component={DummyScreen}
                options={{
                    headerTintColor: "#5B658A",
                    header: (HeaderProps) => {
                        console.log(HeaderProps);
                        return (
                            <Header
                                title={HeaderProps.scene.route.name}
                                bgColor={HeaderProps.scene.descriptor.options.headerTintColor}
                            />
                        )
                    }
                }}
            />
        </Stack.Navigator>
    );
}

export default Navigation;
