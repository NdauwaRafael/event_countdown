/**
 * Created by Raphael Karanja on 2019-02-23.
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native'
import {Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base';
import {connect} from "react-redux";
import * as authActions from '../../../../CountdownEventsStore/actions/Login'
import {bindActionCreators} from "redux";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.signUp = this.signUp.bind(this);
        this.login = this.login.bind(this);
    }

    static navigationOptions = {
        headerLeft: null,
    };


    componentDidMount() {
        this.props.navigation.navigate(this.props.auth.loggedIn ? 'List' : 'Login')
    }


    signUp() {
        this.props.navigation.navigate('Register');
    };

    login() {
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.actions.loginUser(user)
            .then((error)=>{
                console.log('success')
            })
            .catch(error=>{
                console.log(error, 'error')
            })
    };

    render() {
        return (
            <Container style={styles.container}>
                <Form>
                    <View>
                        <Text>{this.props.loginError}</Text>
                    </View>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            onChangeText={(email) => this.setState({email})}
                            autoCorrect={false}
                            autoCapitalize="none"/>
                    </Item>

                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            onChangeText={(password) => this.setState({password})}
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"/>
                    </Item>

                    <Button
                        style={{marginTop: 15}}
                        full
                        rounded
                        success
                        onPress={() => this.login}>
                        <Text style={{color: '#fff'}}>Login</Text>
                    </Button>

                    <Button
                        style={{marginTop: 15}}
                        full
                        rounded
                        info
                        onPress={() => this.signUp()}>
                        <Text style={{color: '#fff'}}>Sign Up!</Text>
                    </Button>
                </Form>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center"
    }
});

function mapStateToProps({auth}) {
    return {auth};
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

