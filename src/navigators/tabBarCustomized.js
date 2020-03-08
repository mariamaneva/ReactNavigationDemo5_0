import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HelloReactNavigationScreen from './../screens/HelloReactNavigationScreen';
import DummyScreen from './../screens/DummyScreen';

// Tab bar components
import TabBar from './../components/TabBar';
import { Icon } from 'native-base';


const Tab  = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <TabBar {...props} /> }
        >
            <Tab.Screen 
                name="Screen 1"
                component={HelloReactNavigationScreen}
                options={{
                    tabBarIcon: (style) => (
                        <Icon style={style} type="FontAwesome" name="home" />
                    )
                }}
            />
            <Tab.Screen
                name="Screen 2"
                component={DummyScreen}
                options={{
                    tabBarIcon: (style) => (
                        <Icon style={style} name="star" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default Navigation;