/**
 * Created by Raphael Karanja on 2019-02-23.
 */
import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native'
import {Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base';
import { connect } from "react-redux";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.signUp = this.signUp.bind(this);
    }
    signUp() {

    };

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

                    <Item floatingLabel>
                        <Label>Confirm Password</Label>
                        <Input
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"/>
                    </Item>

                    <Button
                        style={{marginTop: 15}}
                        full
                        rounded
                        success>
                        <Text style={{color: '#fff'}}>Login</Text>
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

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Register);