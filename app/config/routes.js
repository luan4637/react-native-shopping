/**
 * Created by luan.pham on 1/12/2018.
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

//components
import Home from '../screens/Home';
import Category from '../screens/Category';
import Offer from '../screens/Offer';
import Product from '../screens/Product';

import Cart from '../screens/Cart';
import Wishlist from '../screens/Wishlist';
import User from '../screens/User';


const MenuIcon = (props) => {
    return (
        <Icon 
            name="md-menu"
            size={28}
            color="#fff"
            style={{padding: 16}}
            onPress={() => props.navigation.navigate('DrawerOpen')}
        />
    );
};

const BackIcon = (props) => {
    return (
        <Icon 
            name="ios-arrow-back"
            size={28}
            color="#fff"
            style={{padding: 16}}
            onPress={() => props.navigation.goBack(null)}
        />
    );
};

const SearchIcon = (props) => {
    return (
        <Icon 
            name="md-search"
            size={28}
            color="#fff"
            style={{padding: 16}}
        />
    );
};

const NotificationIcon = (props) => {
    return (
        <Icon 
            name="md-notifications"
            size={28}
            color="#fff"
            style={{padding: 16, paddingRight: 0}}
        />
    );
};

/* Stack Navigation: Home */
export const StackHome = StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                title: 'Home',
                headerLeft: <MenuIcon navigation={navigation} />,
                headerRight: 
                    <View style={{ flexDirection: 'row' }}>
                        <NotificationIcon />
                        <SearchIcon />
                    </View>,
            }),
        },
        Product: {
            screen: Product,            
            navigationOptions: ({ navigation }) => ({
                //title: 'Product Details',
                headerLeft: <BackIcon navigation={navigation} />,
                headerRight: 
                <View style={{ flexDirection: 'row' }}>
                    <NotificationIcon />
                    <SearchIcon />
                </View>,
            }),
        },
    }, {
        initialRouteName: 'Home',
        navigationOptions: {
            headerTintColor: '#fff',
            headerTitleStyle : {
                alignSelf: 'center',
            },
            headerStyle: {            
                backgroundColor: '#FB7A52',
                elevation: 0,
                shadowOpacity: 0,
            }
        }
    }
);

/* Stack Navigation: Category */
export const StackCategory = StackNavigator(
    {
        Category: {
            screen: Category,
            navigationOptions: ({ navigation }) => ({
                title: 'Categories',
                headerLeft: <BackIcon navigation={navigation} />,
                headerRight: <Text></Text>
            }),
        },
    }, {
        initialRouteName: 'Category',
        navigationOptions: {
            headerTintColor: '#fff',
            headerTitleStyle : {
                alignSelf: 'center'
            },
            headerStyle: {            
                backgroundColor: '#FB7A52',
                elevation: 0,
                shadowOpacity: 0,
            }
        }
    }
);

/* Stack Navigation: Offer */
export const StackOffer = StackNavigator(
    {
        Offer: {
            screen: Offer,
            navigationOptions: ({ navigation }) => ({
                title: 'Offer',
                headerLeft: <MenuIcon navigation={navigation} />,
                headerRight: 
                    <View style={{ flexDirection: 'row' }}>
                        <Icon style={{marginRight: 16}} name="md-notifications" size={26} color="#fff" />
                        <Icon name="md-search" size={26} color="#fff" />
                    </View>,
            }),
        },
    }, {
        initialRouteName: 'Offer',
        navigationOptions: {
            headerTintColor: '#fff',
            headerTitleStyle : {
                alignSelf: 'center'
            },
            headerStyle: {            
                backgroundColor: '#FB7A52',
                padding: 16,
                elevation: 0,
                shadowOpacity: 0,
            }
        }
    }
);

/* Stack Navigation: Cart */
export const StackCart = StackNavigator(
    {
        Cart: {
            screen: Cart,
            navigationOptions: ({ navigation }) => ({
                title: 'Cart',
            }),
        },
    }, {
        initialRouteName: 'Cart',
        navigationOptions: {
            headerTintColor: '#fff',
            headerTitleStyle : {
                alignSelf: 'center'
            },
            headerStyle: {            
                backgroundColor: '#FB7A52',
                padding: 16,
                elevation: 0,
                shadowOpacity: 0,
            }
        }
    }
);

/* Stack Navigation: Wishlist */
export const StackWishlist = StackNavigator(
    {
        Wishlist: {
            screen: Wishlist,
            navigationOptions: ({ navigation }) => ({
                title: 'Wishlist',
            }),
        },
    }, {
        initialRouteName: 'Wishlist',
        navigationOptions: {
            headerTintColor: '#fff',
            headerTitleStyle : {
                alignSelf: 'center'
            },
            headerStyle: {            
                backgroundColor: '#FB7A52',
                padding: 16,
                elevation: 0,
                shadowOpacity: 0,
            }
        }
    }
);

/* Stack Navigation: User */
export const StackUser = StackNavigator(
    {
        User: {
            screen: User,
            navigationOptions: ({ navigation }) => ({
                title: 'User',
            }),
        },
    }, {
        initialRouteName: 'User',
        navigationOptions: {
            headerTintColor: '#fff',
            headerTitleStyle : {
                alignSelf: 'center'
            },
            headerStyle: {            
                backgroundColor: '#FB7A52',
                padding: 16,
                elevation: 0,
                shadowOpacity: 0,
            }
        }
    }
);

/* Drawer Navigation */
export const Drawer = DrawerNavigator (
    {        
        DrawerHome: { 
            screen: StackHome,
            navigationOptions: {
                title: 'Home'
            }
        },
        DrawerCategory: { 
            screen: StackCategory,
            
            navigationOptions: {
                title: 'Categories',
            }
        },
        DrawerOffer: { 
            screen: StackOffer,
            navigationOptions: {
                title: 'Offer'
            }
        },
    },
    {
        initialRouteName: 'DrawerHome',
        drawerPosition: 'left',
        contentOptions: {
            activeTintColor: 'red'
        }
    }
);

/* Tab Navigation */
export const Tab = TabNavigator (
    {
        Home: { 
            screen: Drawer,
            navigationOptions: {                
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => 
                    <Icon
                        name="ios-home-outline"
                        size={28}
                        style={{color: tintColor}}
                    />
                ,
            }
        },
        Cart: { 
            screen: StackCart,
            navigationOptions: {
                title: 'Cart',
                tabBarIcon: ({ tintColor }) => 
                    <Icon
                        name="ios-cart-outline"
                        size={28}
                        style={{color: tintColor}}
                    />
                ,
            }
        },
        Wishlist: { 
            screen: StackWishlist,
            navigationOptions: {
                title: 'Wishlist',
                tabBarIcon: ({ tintColor }) => 
                    <Icon
                        name="ios-heart-outline"
                        size={28}
                        style={{color: tintColor}}
                    />
                ,
            }
        },
        User: { 
            screen: StackUser,
            navigationOptions: {
                title: 'User',
                tabBarIcon: ({ tintColor }) => 
                    <Icon
                        name="ios-person-outline"
                        size={28}
                        style={{color: tintColor}}
                    />
                ,
            }
        },
    }, {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: {
            activeTintColor: '#333',
            //activeBackgroundColor: '#990000',
            inactiveTintColor: '#666',
            showIcon: true,
            upperCaseLabel: false,
            tabStyle: {
                paddingLeft: 0,
                paddingRight: 0,
            },
            labelStyle: {
                margin: 0,
                fontSize: 12,
            },
            indicatorStyle: {
                backgroundColor: '#fff'
            },
            style: {
                borderTopWidth: 1,
                borderTopColor: '#ccc',
                backgroundColor: '#fff',
            },
        }
    }
);



const slackNavigationOptions = {
    headerTintColor: '#fff',
    headerTitleStyle : {
        alignSelf: 'center'
    },
    headerStyle: {            
        backgroundColor: '#FB7A52',
        padding: 16,
        elevation: 0,
        shadowOpacity: 0,
    }
};


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