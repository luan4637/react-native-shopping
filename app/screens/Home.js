/**
 * Created by luan.pham on 1/12/2018.
 */
import React, { Component } from 'react';
import { StyleSheet, ScrollView, RefreshControl, View, Text, Button, Image, Slider, ListView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PartialSlider from './Home/Slider';
import PartialCategory from './Home/Category';
import PartialLatestProduct from './Home/LatestProduct';
import UrlApi from '../config/urlApi';

class Home extends Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
            loading: true,
            refreshing: false,
            error: false,
        }
    }

    componentDidMount() 
    { 
        this._makeRemoteRequest();
    }

    _makeRemoteRequest() 
    {
        fetch(UrlApi.homePage)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    refreshing: false,
                    dataSourceCategories: responseJson.categories,
                    dataSourceProducts: responseJson.products,
                });
            })
            .catch((error) => {
                //console.error(error);
                this.setState({
                    error: true,
                });
            });
    }

    _onRefresh() 
    {
        this.setState(
            { 
                refreshing: true,
                error: false,
            }, 
            () => {
                this._makeRemoteRequest();
            }
        );
    }

    render() 
    {
        if (this.state.error) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 30}}>Connection timeout</Text>
                    <Button onPress={this._onRefresh.bind(this)} title="Try again" />
                </View>
            );
        }
        else if (this.state.loading) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator />
                </View>
            );
        }
        
        return (
            <View style={styles.layout}>
                <ScrollView 
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />
                    }>
                    <PartialSlider navigation={this.props.navigation} />
                    <PartialCategory navigation={this.props.navigation} dataSource={this.state.dataSourceCategories} />
                    <PartialLatestProduct navigation={this.props.navigation} dataSource={this.state.dataSourceProducts} />
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