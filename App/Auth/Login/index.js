/**
 * Created by Raphael Karanja on 2019-02-23.
 */

import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native'
import {Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.signUp = this.signUp.bind(this);
        this.login = this.login.bind(this);
    }

    signUp() {

    };

    login() {

    }

    render() {
        return (
            <Container style={styles.container}>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"/>
                    </Item>

                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"/>
                    </Item>

                    <Button
                        style={{marginTop: 15}}
                        full
                        rounded
                        success
                        onPress={()=>this.login}>
                        <Text style={{color: '#fff'}}>Login</Text>
                    </Button>

                    <Button
                        style={{marginTop: 15}}
                        full
                        rounded
                        info
                        onPress={()=>this.signUp}>
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
})