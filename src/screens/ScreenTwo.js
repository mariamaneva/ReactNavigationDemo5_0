//import liraries
import React from 'react';
import { Title, Container, Button, Text } from 'native-base';
import BaseStyles from './../baseStyles.js';

const ScreenTwo = ({ navigation }) => {
    console.log("Screen Two index", navigation.dangerouslyGetState().index)
    console.log("Screen Two routes", navigation.dangerouslyGetState().routes)
    return (
        <Container style={BaseStyles.screenLayout}>
            <Title>Screen Two</Title>
            <Button
                onPress={() => {
                    navigation.navigate('Screen Three')
                }}
            >
                <Text>'navigate' to Screen Three</Text>
            </Button>
            <Button
                onPress={() => {
                    navigation.goBack()
                }}
            >
                <Text>'GoBack' to prev screen</Text>
            </Button>
        </Container>
    );
};

export default ScreenTwo;
