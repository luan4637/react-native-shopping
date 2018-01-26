/**
 * Created by luan.pham on 1/12/2018.
 */

import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { Tab } from './config/routes';


class App extends React.Component {
    render() {
        return (
            <View style={styles.layout}>
                <StatusBar
                    backgroundColor="#FB7A52"
                    barStyle="light-content"
                />
                <Tab />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layout: {
        backgroundColor: '#fff',
        flex: 1
    },
});

export default App