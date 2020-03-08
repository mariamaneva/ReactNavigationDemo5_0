//import liraries
import React from 'react';
import { Title, Container } from 'native-base';
import BaseStyles from './../baseStyles.js';

const NavigationPropScreen = ({ navigation }) => {
    console.log('navigation:', navigation);

    return (
        <Container style={BaseStyles.screenLayout}>
            <Title>The NAVIGATION prop</Title>
        </Container>
    );
};

export default NavigationPropScreen;
