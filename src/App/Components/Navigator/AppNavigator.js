/**
 * Created by Raphael Karanja on 2019-02-28.
 */
import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthLogin from "../../Containers/Auth/Login";
import AuthRegister from "../../Containers/Auth/Register";
import EventForm from "../../Containers/Events/EventForm";
import CustomHeader from '../CustomHeader'

export default createAppContainer(createStackNavigator({
        Login: {
            screen: AuthLogin,
            navigationOptions: {
                headerTitle: 'Login'
            }
        },

        Register: {
            screen: AuthRegister,
            navigationOptions: {
                headerTitle: "Sign Up"
            }
        },
        Main: MainTabNavigator,
        Form: {
            screen: EventForm,
            navigationOptions: {
                headerTitle: "Create Event"
            }
        }
    },
    {
        initialRouteName: "Main",
        navigationOptions: {
            header: props => <CustomHeader {...props} />,
            headerStyle: {
                backgroundColor: "transparent"
            },
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#fff",
                zIndex: 1,
                fontSize: 18,
                lineHeight: 23
            },
            headerTintColor: "#fff",
            animationEnabled: true
        }
    }));