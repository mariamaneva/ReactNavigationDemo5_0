//import liraries
import React from 'react';
import { Title, Container } from 'native-base';
import BaseStyles from './../baseStyles.js';

const DummyScreen = ({ navigation }) => {
    return (
        <Container style={BaseStyles.screenLayout}>
            <Title>Dummy Screen</Title>
        </Container>
    );
};

export default DummyScreen;
