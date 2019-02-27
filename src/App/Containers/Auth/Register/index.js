/**
 * Created by Raphael Karanja on 2019-02-23.
 */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native'
import {Container, Content, Form, Input, Item, Button, Label, Text, View} from 'native-base';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from '../../../../CountdownEventsStore/actions/SignUp'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            errors: {
                email: '',
                password: '',
                confirmPassword: '',
            }
        };

        this.signUp = this.signUp.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    static navigationOptions = {
        title: 'Register User',
    };

    emailIsValid(email) {
        const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
        return emailRegex.test(String(email).toLowerCase());
    }

    userIsValid() {
        let isValid = true;
        let {email, password, confirmPassword, errors} = this.state;

        if (password !== confirmPassword) {
            errors.confirmPassword = 'Password Do not Match';
            isValid = false;
        } else {
            errors.confirmPassword = ""
        }

        if (password.length <= 3) {
            errors.password = 'Password Too Short';
            isValid = false;
        } else {
            errors.password = ''
        }

        if (!this.emailIsValid(email)) {
            errors.email = 'Enter a valid Email';
            isValid = false;
        } else {
            errors.email = ''
        }

        this.setState({errors});

        return isValid;
    }

    signUp() {
        if (!this.userIsValid()) {
            return;
        }
        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.actions.createUser(user);
        this.props.navigation.navigate('Loading');

    };

    render() {
        let {errors} = this.state;
        return (
            <Container style={styles.container}>
                <Form>
                    <View style={styles.formElement}>
                        <Item floatingLabel error={errors.email.length > 0}>
                            <Label>Email</Label>
                            <Input
                                onChangeText={(email) => this.setState({email})}
                                autoCorrect={false}
                                autoCapitalize="none"/>
                        </Item>

                        <Text style={styles.errorMessage}>{errors.email}</Text>

                    </View>

                    <View style={styles.formElement}>
                        <Item floatingLabel error={errors.password.length > 0}>
                            <Label>Password</Label>
                            <Input
                                onChangeText={(password) => this.setState({password})}
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize="none"/>
                        </Item>
                        <Text style={styles.errorMessage}>{errors.password}</Text>
                    </View>

                    <View style={styles.formElement}>
                        <Item floatingLabel error={errors.confirmPassword.length > 0}>
                            <Label>Confirm Password</Label>
                            <Input
                                onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize="none"/>
                        </Item>
                        <Text style={styles.errorMessage}>{errors.confirmPassword}</Text>
                    </View>

                    <Button
                        onPress={() => this.signUp()}
                        style={{marginTop: 15}}
                        full
                        rounded
                        success>
                        <Text style={{color: '#fff'}}>Register</Text>
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
    },
    errorMessage: {
        fontSize: 10,
        color: 'red'
    },
    formElement: {
        marginTop: 15,
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);