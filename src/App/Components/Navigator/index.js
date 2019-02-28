/**
 * Created by Raphael Karanja on 2019-02-28.
 */
import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import {connect} from 'react-redux'

class Navigator extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    };

    render() {
        return (
            <div>

            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        //course: state.course
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionsName, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigator)