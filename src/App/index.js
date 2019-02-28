/**
 * Created by Raphael Karanja on 2019-02-28.
 */
import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Navigator from './Components/Navigator/AppNavigator';

class AppRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return (
            <Navigator />
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