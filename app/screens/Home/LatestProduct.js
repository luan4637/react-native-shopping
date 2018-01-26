/**
 * Created by luan.pham on 1/12/2018.
 */
import React, { Component } from 'react';
import { StyleSheet, ListView, View, Text, Button, Image, ActivityIndicator, Dimensions, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import UrlApi from '../../config/urlApi';

const { width } = Dimensions.get('window');

class LatestProduct extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() { 
        return fetch(UrlApi.homeProduct)
                .then((response) => response.json())
                .then((responseJson) => {
                    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                    this.setState({
                        isLoading: false,
                        dataSource: ds.cloneWithRows(responseJson),
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
    }

    _renderRow(data) {
        return (
            <TouchableHighlight 
                underlayColor={'#fff'} 
                style={styles.itemWrapper} 
                onPress={() => this.props.navigation.navigate('Product', {productId: 1, productName: data.name})}>
                <View>
                    <Image source={{uri: data.image}} style={styles.itemImage} />
                    <Text style={styles.itemName}>{data.name}</Text>
                </View>
            </TouchableHighlight>
        );
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
                <ListView
                    contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    pageSize={this.state.dataSource.getRowCount()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layout: {
        justifyContent: 'center',
    },
    list: {
        flexDirection: 'row', 
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    itemWrapper: {
        marginLeft: 2.5,
        marginRight: 2.5,
        marginBottom: 5,
        paddingVertical: 10,
        width: ( width / 2 - 4.5 * 2),
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    itemImage: {        
        width: 90,
        height: 90,        
    },
    itemName: {
        marginTop: 5,
        fontSize: 10,
    },
});

export default LatestProduct