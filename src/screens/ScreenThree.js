//import liraries
import React from 'react';
import { Title, Container, Button, Text } from 'native-base';
import { useNavigationState } from '@react-navigation/native';
import BaseStyles from './../baseStyles.js';

const ScreenThree = ({ navigation }) => {
    console.log("Screen Three index", navigation.dangerouslyGetState().index);
    console.log("Screen Three routes", navigation.dangerouslyGetState().routes);
    return (
        <Container style={BaseStyles.screenLayout}>
            <Title>Screen Three</Title>
            <Button
                onPress={() => {
                     navigation.popToTop()
                }}
            >
                <Text>'popToTop'</Text>
            </Button>
            <Button
                onPress={() => {
                     navigation.pop()
                }}
            >
                <Text>'pop'</Text>
            </Button>
            <Button
                onPress={() => {
                    navigation.push('Screen One')
                }}
            >
                <Text>'push' to Screen One</Text>
            </Button>
        </Container>
    );
};

export default ScreenThree;
