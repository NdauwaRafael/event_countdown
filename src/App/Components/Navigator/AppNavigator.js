/**
 * Created by Raphael Karanja on 2019-02-28.
 */
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthLogin from "../../Containers/Auth/Login";
import AuthRegister from "../../Containers/Auth/Register";
import EventForm from "../../Containers/Events/EventForm";

export default createAppContainer(createSwitchNavigator({
    Login: AuthLogin,
    Register: AuthRegister,
    Main: MainTabNavigator,
    Form: EventForm
}));