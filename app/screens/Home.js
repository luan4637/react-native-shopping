/**
 * Created by luan.pham on 1/12/2018.
 */
import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Button, Image, Slider, ListView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PartialSlider from './Home/Slider'
import PartialCategory from './Home/Category'
import PartialLatestProduct from './Home/LatestProduct'

class Home extends Component
{
    render() 
    {
        return (
            <View style={styles.layout}>
                <ScrollView>
                    <PartialSlider navigation={this.props.navigation} />
                    <PartialCategory navigation={this.props.navigation} />
                    <PartialLatestProduct navigation={this.props.navigation} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layout: {
        backgroundColor: '#eee',
    },
});

export default Home