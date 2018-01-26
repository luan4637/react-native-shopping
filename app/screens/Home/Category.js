import React, { Component } from 'react';
import { StyleSheet, ListView, View, Text, Button, Image, ActivityIndicator, ScrollView } from 'react-native';
import UrlApi from '../../config/urlApi';

class Category extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() { 
        return fetch(UrlApi.homeCategory)
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
            <View style={styles.itemWrapper}>
                <Image source={{uri: data.image}} style={styles.itemImage} />
                <Text numberOfLines={1} style={styles.itemName}>{data.name}</Text>
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
            <View style={styles.wrapper}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <ListView
                        contentContainerStyle={styles.list}
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow.bind(this)}
                        pageSize={this.state.dataSource.getRowCount()}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        margin: 5,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
    itemWrapper: {
        marginTop: 10,
        marginRight: 15,
        marginBottom: 10,
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImage: {        
        width: 50,
        height: 50,
        borderRadius: 30
    },
    itemName: {
        marginTop: 2,
        fontSize: 8,
    },
});

export default Category