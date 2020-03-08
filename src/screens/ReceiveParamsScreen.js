//import liraries
import React from 'react';
import { Title, Container, Button, Text, Form, Item, Input } from 'native-base';
import { useNavigationState } from '@react-navigation/native';
import BaseStyles from './../baseStyles.js';

const ReceiveParamsScreen = ({ navigation, route, state }) => {
    console.log("Screen route", route);
    console.log("Navigation state", navigation.dangerouslyGetState().routes);

    return (
        <Container style={BaseStyles.screenLayout}>
            <Title>Screen param 'test':</Title>
            <Text style={{fontSize: 30}}>{
                route.params.test
            }</Text>
            <Button
                onPress={() => navigation.setParams(
                    {test: `${route.params.test} updated`}
                )}
            >
                <Text>Update with setParams()</Text>
            </Button>
            
        </Container>
    );
};

export default ReceiveParamsScreen;
