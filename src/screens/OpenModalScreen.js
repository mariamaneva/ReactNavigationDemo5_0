//import liraries
import React from 'react';
import { Title, Container, Button, Text } from 'native-base';
import BaseStyles from './../baseStyles.js';

const OpenModalScreen = ({ navigation }) => {
    return (
        <Container  style={BaseStyles.screenLayout}>
            <Title>Main Navigation Screen</Title>
            <Button
                onPress={() => {
                    navigation.navigate("Modal");
                }}
            >
                <Text>Open Modal</Text>
            </Button>
        </Container>
    );
};

export default OpenModalScreen;
