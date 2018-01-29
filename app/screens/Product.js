/**
 * Created by luan.pham on 1/12/2018.
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import UrlApi from '../config/urlApi';
import ProductImage from './Product/Slider';

class Product extends Component
{
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.productName,
    });

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() { 
        this._makeRemoteRequest();
    }

    _makeRemoteRequest() {
        fetch(UrlApi.productDetail + '?id=' + this.props.navigation.state.params.productId)
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

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={styles.layout}>
                <ProductImage productImages={this.state.dataSource.images} />
                <Text style={styles.productName}>{this.state.dataSource.name}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 10}}>
                    <Text style={{borderRightWidth: 1, borderBottomColor: '#ccc', paddingRight: 20, marginRight: 20, fontSize: 35}}>$45.99</Text>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Icon 
                                name="md-star"
                                size={28}
                                color="#e5da09"
                            />
                            <Icon 
                                name="md-star"
                                size={28}
                                color="#e5da09"
                            />
                            <Icon 
                                name="md-star"
                                size={28}
                                color="#e5da09"
                            />
                            <Icon 
                                name="md-star"
                                size={28}
                                color="#e5da09"
                            />
                            <Icon 
                                name="md-star"
                                size={28}
                                color="#ccc"
                            />
                        </View>
                        <Text>BASE ON 27 REVIEWS</Text>
                    </View>
                </View>
                <View style={{paddingHorizontal: 20}}>
                    <Button title="Add to basket" onPress={() => {}} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layout: {
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    productName: {
        fontSize: 20,
        color: '#FB7A52',
        alignSelf: 'stretch',
        textAlign: 'center',
        paddingVertical: 10,
    }
});

export default Product