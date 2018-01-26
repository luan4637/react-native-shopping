import React, { Component, Menu } from 'react';
import SlideMenu from 'react-native-side-menu'
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        
    },
    welcome: {
        
    },
    instructions: {
        
    }
});

class ContentView extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
                To get started, edit index.ios.js
            </Text>
            <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                Cmd+Control+Z for dev menu
            </Text>
        </View>
        );
    }
}

class NavBarSlider extends Component 
{
    render() {
        const menu = <Menu navigator={navigator} />;
    
        return (
            <SlideMenu menu={menu}>
                <ContentView />
            </SlideMenu>
        );
    }
}

export default NavBarSlider