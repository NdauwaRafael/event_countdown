/**
 * Created by Raphael Karanja on 2019-02-28.
 */
import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'expo';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import AuthLogin from "../../Containers/Auth/Login";
import AuthRegister from "../../Containers/Auth/Register";
import EventList from "../../Containers/Events/EventList";
import EventForm from "../../Containers/Events/EventForm";
const HomeStack = createStackNavigator({
    Home: EventList,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <Icon.Ionicons
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        size={26}>

        </Icon.Ionicons>
    ),
};

const LoginStack = createStackNavigator({
    Login: AuthLogin,
});

LoginStack.navigationOptions = {
    tabBarLabel: 'Login',
    tabBarIcon: ({ focused }) => (
        <Icon.Ionicons
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
            size={26}>

        </Icon.Ionicons>
    ),
};

const RegisterStack = createStackNavigator({
    Settings: AuthRegister,
});

RegisterStack.navigationOptions = {
    tabBarLabel: 'Sign Up',
    tabBarIcon: ({ focused }) => (
        <Icon.Ionicons
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
            size={26}>

        </Icon.Ionicons>
    ),
};

export default createBottomTabNavigator({
    HomeStack,
    LoginStack,
    RegisterStack,
});