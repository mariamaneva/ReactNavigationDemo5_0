//import liraries
import React from 'react';
import { Title, Container, Button, Text } from 'native-base';
import { useNavigationState } from '@react-navigation/native';
import BaseStyles from './../baseStyles.js';

const ScreenOne = ({ navigation }) => {
    console.log("Screen One index", navigation.dangerouslyGetState().index);
    console.log("Screen One routes",navigation.dangerouslyGetState().routes);

    return (
        <Container style={BaseStyles.screenLayout}>
            <Title>Screen One</Title>
            <Button
                onPress={() => {
                    navigation.navigate('Screen Two')
                }}
            >
                <Text>'navigate' to Screen Two</Text>
            </Button>
            <Button
                onPress={() => {
                    navigation.replace('Screen Two')
                }}
            >
                <Text>'replace' to Screen Two</Text>
            </Button>
            <Button
                onPress={() => {
                    navigation.push('Screen Three')
                }}
            >
                <Text>'push' to Screen Three</Text>
            </Button>
        </Container>
    );
};

export default ScreenOne;
