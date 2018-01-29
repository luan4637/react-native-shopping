/**
 * Created by luan.pham on 1/12/2018.
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class Offer extends Component
{
    render() {
        return (
            <View style={styles.layout}>
                <Text style={styles.text}>Offer Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layout: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        color: 'green'
    }
});

export default Offer