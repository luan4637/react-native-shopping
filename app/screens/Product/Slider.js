import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window');

class Slider extends Component
{
    constructor(props) 
    {
        super(props);
    }

    render() 
    {
        let slider = [];

        this.props.productImages.map((image, index) => {
            slider.push(
                <View key={index} style={styles.sliderItem}>
                    <Image style={styles.sliderImage} resizeMode="contain" source={{uri: image}} />
                </View>
            )
        })                   

        return (
            <View style={styles.sliderWrapper}>
                <Swiper paginationStyle={styles.sliderPagination} autoplay autoplayTimeout={5}>
                    {slider}                        
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sliderWrapper: {
        paddingVertical: 10,
        height: 200,
    },
    sliderItem: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    sliderImage: {
        width,
        flex: 1
    },
    sliderPagination: {
        bottom: 5
    }
});

export default Slider