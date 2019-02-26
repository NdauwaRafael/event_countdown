/**
 * Created by Raphael Karanja on 2019-02-24.
 */
import React, {Component} from 'react';
import {Container} from 'native-base';
import {connect} from 'react-redux';
import {
    Text
} from 'react-native';
class Loading extends Component{
    render() {
        return (
            <Container>
                <Text>{this.props.auth.loggedIn}</Text>
            </Container>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth
    }
};

export default connect(
    mapStateToProps,
)(Loading);