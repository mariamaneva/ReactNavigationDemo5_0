//import liraries
import React from 'react';
import { Title, Container, Button, Text } from 'native-base';
import BaseStyles from './../baseStyles.js';

const NavigatorOptionsScreen = ({ navigation, route }) => {
    console.log('navigation:', navigation);
    console.log('route:', route);
    return (
        <Container style={BaseStyles.screenLayout}>
            <Title>Navigation options</Title>
            <Button
                onPress={() => {
                    navigation.navigate('Dummy Screen')
                }}
            >
                <Text>go to another screen</Text>
            </Button>
        </Container>
    );
};

export default NavigatorOptionsScreen;
