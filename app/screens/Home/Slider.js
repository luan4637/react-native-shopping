import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper'
import UrlApi from '../../config/urlApi';

const { width } = Dimensions.get('window');

class Slider extends Component
{
    constructor(props) 
    {
        super(props);

        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() 
    { 
        return fetch(UrlApi.sliderBanner)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        this.setState({
                            isLoading: false,
                            dataSource: responseJson,
                        });
                    })
                    .catch((error) => {
                        console.error(error);
                    });
    }

    render() 
    {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator />
                </View>
            );
        }

        let slider = [];
        this.state.dataSource.map((sliderItem, index) => {
            slider.push(
                <View key={index} style={styles.sliderItem}>
                    <Image style={styles.sliderImage} source={{uri: sliderItem.image}} />
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
        height: 150,
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