//import liraries
import React, { useState } from 'react';
import { Title, Container, Button, Text, Form, Item, Input } from 'native-base';
import BaseStyles from './../baseStyles.js';

const SetParamsScreen = ({ navigation }) => {

    const [param, setParam] = useState('');
    return (
        <Container style={BaseStyles.screenLayout}>
            <Title>Screen One</Title>
            <Input
                value={param}
                onChangeText={(value) => setParam(value)}
                placeholder="Enter param..."
            />
            <Button
                onPress={
                  () => { 
                    navigation.navigate('Receive a param', {test: param})
                    // navigation.navigate('Receive a param')
                }}
            >
                <Text>'NAVIGATE' to Screen Two With Param</Text>
            </Button>
        </Container>
    );
};

export default SetParamsScreen;
