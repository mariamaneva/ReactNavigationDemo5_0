import React from 'react';
import { StyleSheet } from 'react-native';
import { View, H1, Text,  } from 'native-base';


const Header = (props) => {

    return (
        <View style={[
            styles.container,
            {backgroundColor: props.bgColor}
        ]}>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        alignItems: "center",
        elevation: 10,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,.3)"
    },
    text: {
        fontSize: 18,
        textTransform: "uppercase",
        color: "#F2EDFA",
        fontWeight: "bold"
    }
})

export default Header;