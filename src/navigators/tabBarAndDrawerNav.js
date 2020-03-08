import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import { View, Button, Text } from 'native-base';

// Screens
import DummyScreen from './../screens/DummyScreen';
import HelloReactNavigationScreen from './../screens/HelloReactNavigationScreen';
import DrawerScreen from './../screens/DrawerScreen';

// All the screens within both navigations are listed in a config array
const screensConfigs = [
    {
        name: "Home",
        screen: DrawerScreen,
        showsInTabs: true
    },
    {
        name: "Info",
        screen: DrawerScreen,
        showsInTabs: true,
        showsInDrawer: true
    },
    {
        name: "News",
        screen: DrawerScreen,
        showsInTabs: true
    },
    {
        name: "Settings",
        screen: DrawerScreen,
        showsInDrawer: true,
    },
    {
        name: "User Profile",
        screen: DrawerScreen,
        showsInDrawer: true,
    },
]

// custom drawer component
// which lists the drawer tabs from the config file
const CustomDrawerComponent = (props) => {
  console.log(props);
    return(
        <DrawerContentScrollView>
            {screensConfigs.map((screenConfig) => {
                // get the nested navigator's state current index in order to get the currently selected tab index
                const currentIndex = props.state.routes[0].state?.index;
                const focused = screensConfigs[currentIndex]?.name === screenConfig.name ?? false;
                if(screenConfig.showsInDrawer) {
                    return(
                        <DrawerItem
                            key={screenConfig.name}
                            label={screenConfig.name}
                            focused={focused}
                            onPress={() => {
                                props.navigation.navigate(screenConfig.name)
                            }}
                        />
                        
                    );
                }
            })}
        </DrawerContentScrollView>
    )
}

const MainStack =  createBottomTabNavigator();
const RootStack =  createDrawerNavigator();

// include all screens from the config array to the tab bar navigator
function MainStackScreen() {
    return (
        <MainStack.Navigator>
            {screensConfigs.map((screenConfig) => {
                if(screenConfig.showsInTabs) {
                    return (
                        <MainStack.Screen 
                            key={screenConfig.name}
                            name={screenConfig.name}
                            component={screenConfig.screen}
                            initialParams={{title: screenConfig.name}}
                        />
                    );
                }
                return (
                    <MainStack.Screen 
                        key={screenConfig.name}
                        name={screenConfig.name}
                        component={screenConfig.screen}
                        initialParams={{title: screenConfig.name}}
                        options={{
                            // hide the tab buttons which you don't want shown in the bottom bar
                            tabBarButton: () => null
                        }}
                    />
                );
            })}
        </MainStack.Navigator>
    );
  }

const Navigation = () => {
    return (
        // wrap the whole tab bar navigation with a drawer navigator
        // with a custom drawer component
        // which lists creates the drawer tabs from the config file
        <RootStack.Navigator
            drawerContent={(props) => <CustomDrawerComponent {...props}/> }
        >
            <RootStack.Screen 
                name="Main"
                component={MainStackScreen}
            />
        </RootStack.Navigator>
    );
}

export default Navigation;
