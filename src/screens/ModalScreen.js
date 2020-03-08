//import liraries
import React from 'react';
import { StyleSheet } from 'react-native';
import { Title, Container, Button, Text } from 'native-base';
import BaseStyles from './../baseStyles.js';

const ModalScreen = ({ navigation }) => {
    return (
        <Container style={[BaseStyles.screenLayout, styles.modalContainer]}>
            <Title>I'm a Modal!</Title>
            <Button
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Text>Close</Text>
            </Button>
        </Container>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "#ffffff",
        elevation: 10,
    }
})

export default ModalScreen;