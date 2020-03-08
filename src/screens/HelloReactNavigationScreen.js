//import liraries
import React from 'react';
import { Title, Container } from 'native-base';
import BaseStyles from './../baseStyles.js';

const HelloReactNavigationScreen = () => {
    return (
        <Container style={BaseStyles.screenLayout}>
            <Title>Hello React Navigation!</Title>
        </Container>
    );
};

export default HelloReactNavigationScreen;
