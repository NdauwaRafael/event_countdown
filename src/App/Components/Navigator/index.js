/**
 * Created by Raphael Karanja on 2019-02-28.
 */
import React, {Component} from 'react';
import {StackNavigator, addNavigationHelpers} from 'react-navigation'
import {connect} from 'react-redux'
import AuthLogin from "../../Containers/Auth/Login";
import AuthRegister from "../../Containers/Auth/Register";
import EventList from "../../Containers/Events/EventList";
import EventForm from "../../Containers/Events/EventForm";
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
const addListener = createReduxBoundAddListener("root");
export const AppNavigator = new StackNavigator({
    Login: {
        screen: AuthLogin
    },
    Register: {
        screen: AuthRegister
    },
    List: {
        screen: EventList
    },
    Form: {
        screen: EventForm
    }
}, {
    initialRouteName: 'List',
});


class Navigator extends Component {
    state = {};

    render() {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.navigation,
                addListener
            })}/>
        );
    }
}


const mapStateToProps = state => ({
    navigation: state.navigation,
})


export default connect(
    mapStateToProps
)(Navigator)