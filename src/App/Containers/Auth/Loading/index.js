/**
 * Created by Raphael Karanja on 2019-02-24.
 */
import React, {Component} from 'react';
import {Container} from 'native-base';
import {connect} from 'react-redux';
import {Asset, SplashScreen} from 'expo';
import {
    Image,
    Text, View
} from 'react-native';

class Loading extends Component {
    state = {
        isReady: false,
    }

    componentDidMount() {
        SplashScreen.preventAutoHide()
        // this.props.navigation.navigate(this.props.auth.loggedIn ? 'List' : 'Login')
    }
    checkAuth(){
        if(this.props.auth.loggedIn){
            SplashScreen.hide();
        }
    }
    render() {
        if (!this.state.isReady) {
            return (
                <View style={{flex: 1}}>
                    <Image
                        source={require('../../../../../assets/countdown_logo.png')}
                        onLoad={this.checkAuth()}
                    />
                </View>
            );
        }
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