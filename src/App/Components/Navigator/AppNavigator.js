/**
 * Created by Raphael Karanja on 2019-02-28.
 */
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
    Main: MainTabNavigator,
}));