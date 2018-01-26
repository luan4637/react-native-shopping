/**
 * Created by luan.pham on 1/12/2018.
 */
import React, { Component } from 'react';
import { StyleSheet, ListView, View, Text, Button, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import UrlApi from '../config/urlApi';


class Category extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() { 
        return fetch(UrlApi.category)
                .then((response) => response.json())
                .then((responseJson) => {
                    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                    this.setState({
                        isLoading: false,
                        dataSource: ds.cloneWithRows(responseJson),
                    }, function() {
                        // In this block you can do something with new state.
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
    }

    _renderRow(data) {
        return (
            <View style={styles.itemWrapper}>
                <Image source={{uri: data.image}} style={styles.itemImage} />
                <Text style={styles.itemName}>{data.name}</Text>
            </View>
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
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    list: {
        flexDirection: 'row', 
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    itemWrapper: {
        marginTop: 20,
        marginRight: 10,
        marginBottom: 20,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    itemImage: {        
        width: 90,
        height: 90,        
    },
    itemName: {
        marginTop: 5,
        fontSize: 12,
    },
});

export default Category