/**
  * REACT NAVIGATION RELATED
  * *It is recommended that this import goes at the very top. Otherwise
  * "your app may crash in production even if it works fine in development."
*/
import 'react-native-gesture-handler';
/**
*/
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

/**
  * NAVIGATION EXAMPLES
*/
// import Navigation from './src/navigators/helloReactNavigation';
// import Navigation from './src/navigators/navigationProp';
// import Navigation from './src/navigators/navigateBetweenStackScreens';
// import Navigation from './src/navigators/navigationParams';
// import Navigation from './src/navigators/navigatorOptions';
// import Navigation from './src/navigators/customHeaderStackNav';
// import Navigation from './src/navigators/helloTabBar';
// import Navigation from './src/navigators/tabBarCustomized';
// import Navigation from './src/navigators/helloDrawer';
// import Navigation from './src/navigators/drawerCustomized';
// import Navigation from './src/navigators/loginFlow';
// import Navigation from './src/navigators/modalFlow';
import Navigation from './src/navigators/tabBarAndDrawerNav';



const App = () => {
  return (
    <StyleProvider style={getTheme(material)}>
        {/* NavigationContainer is the component which manages our navigation tree and contains the navigation state. */}
        <NavigationContainer> 
          <Navigation />
        </NavigationContainer>
    </StyleProvider>
  );
};

export default App;
