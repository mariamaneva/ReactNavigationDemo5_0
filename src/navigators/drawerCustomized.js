import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import HelloReactNavigationScreen from './../screens/HelloReactNavigationScreen';
import DrawerScreen from './../screens/DrawerScreen';

// Drawer components
import DrawerComponent from './../components/Drawer';
import { Icon } from 'native-base';


const Drawer  = createDrawerNavigator();

const Navigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerComponent {...props}/> }
        >
            <Drawer.Screen 
                name="Screen 1"
                component={DrawerScreen}
                options={{
                    drawerIcon: (style) => (
                        <Icon style={style} type="FontAwesome" name="home" />
                    )
                }}
            />
            <Drawer.Screen
                name="Screen 2"
                component={HelloReactNavigationScreen}
                options={{
                    drawerIcon: (style) => (
                        <Icon style={style} type="FontAwesome" name="star" />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}

export default Navigation;