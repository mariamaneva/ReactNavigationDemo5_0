//import liraries
import React from 'react';
import { Title, Container, Button, Text } from 'native-base';
import BaseStyles from './../baseStyles.js';
import { useNavigationState } from '@react-navigation/native';

const DrawerScreen = ({ navigation, route }) => {
  const state = useNavigationState(state => state);
  console.log(state);
    const title = route.params?.title;
    return (
        <Container style={BaseStyles.screenLayout}>
            {title 
            ? <Title>{title}</Title>
            : <Title>Drawer Screen</Title>
            }
            
            <Button
                onPress={() => {
                    navigation.openDrawer()
                }}
            >
                <Text>Open Drawer</Text>
            </Button>
        </Container>
    );
};

export default DrawerScreen;


