/**
 * Created by Raphael Karanja on 2019-02-28.
 */
import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {connect} from 'react-redux'
import Navigator from './Components/Navigator/AppNavigator';
import MainTabNavigator from './Components/Navigator/MainTabNavigator'

class AppRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return (
            <View>
                { (this.props.loggedIn) ? <Navigator /> : <MainTabNavigator />}
            </View>
        );
    }
}

AppRoot.propTypes = {
    //course: PropTypes.array.isRequired,
    //actions: PropTypes.object.isRequired
};
const mapStateToProps = (state, ownProps) => {
    return {
        //course: state.course
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        // actions: bindActionCreators(actionsName, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppRoot)