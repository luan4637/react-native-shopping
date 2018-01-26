import React, { Component } from 'react';
//import ReactNavBar from 'react-native-navbar';
//import { View } from 'react-native';
import { StyleSheet, Image } from 'react-native';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: '#F3610E',
    },
    navBar: {
        backgroundColor: '#F3610E',
    },
    title: {
        color: '#ffffff',
    },
    navButton: {
        marginLeft: 0
    },
    image: {
        width: 40,
        height: 40
    },
})

class NavBarHome extends Component 
{
    render() {
        return (
            <NavBar style={styles}>
                <NavButton style={styles.navButton} onPress={() => alert('hi')}>
                    <Image style={styles.image}
                        resizeMode={"contain"}
                        source={require('./img/icon-menu.png')}
                    />
                </NavButton>
                <NavTitle style={styles.title}>
                    {"SimiCart"}
                </NavTitle>
                <NavButton onPress={() => alert('hi')}>
                        <Image style={styles.image}
                        resizeMode={"contain"}
                        source={require('./img/icon-cart.png')}
                    />
                </NavButton>
            </NavBar>
        );
    }
}

export default NavBarHome