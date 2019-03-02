/**
 * Created by Raphael Karanja on 2019-02-28.
 */
import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import Navigator from './Components/Navigator/AppNavigator';
import * as authActions from '../CountdownEventsStore/actions/Login'

class AppRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };


    render() {
        return (
            <Navigator/>
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
        actions: bindActionCreators(authActions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppRoot)