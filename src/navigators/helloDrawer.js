import React from 'react';
import { createDrawerNavigator   } from '@react-navigation/drawer';

// Screens
import HelloReactNavigationScreen from './../screens/HelloReactNavigationScreen';
import DrawerScreen from './../screens/DrawerScreen';

const Drawer  = createDrawerNavigator();

const Navigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Screen 1" component={DrawerScreen} />
            <Drawer.Screen name="Screen 2" component={HelloReactNavigationScreen} />
        </Drawer.Navigator>
    );
}

export default Navigation;