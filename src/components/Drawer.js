import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, H1, Text } from 'native-base';


const DrawerComponent = (props) => {
    console.log(props);

    return (
        <View style={[
            styles.container,
        ]}>
            {props.state.routes.map((route, index) => {
                const { options } = props.descriptors[route.key];
                const label = route.name;

                const isFocused = props.state.index === index;

                const onPress = () => {
                    if (!isFocused) {
                        props.navigation.navigate(route.name);
                    } else {
                        props.navigation.closeDrawer();
                    }
                };

                return ( 
                    <TouchableOpacity
                        onPress={onPress}
                        style={styles.tabButton}
                    >
                        {isFocused 
                            ? props.descriptors[route.key].options.drawerIcon([styles.iconStyleFocused])
                            : props.descriptors[route.key].options.drawerIcon([styles.iconStyle])
                        }
                        <Text 
                            style={
                                isFocused 
                                ? styles.tabButtonTextFocused
                                : styles.tabButtonText
                            }
                        >
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        justifyContent: "flex-start",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,.3)",
        backgroundColor: '#5B658A',
        elevation: 10,
        paddingTop: 50
    },
    tabButton: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    tabButtonText: {
        color: "#ffffff"
    },
    iconStyle: {
        color: '#ffffff',
        marginRight: 20
    },
    iconStyleFocused: {
        color: 'rgba(255,255,255,.5)',
        marginRight: 20
    },
    tabButtonTextFocused: {
        color: 'rgba(255,255,255,.5)'
    }
})

export default DrawerComponent;