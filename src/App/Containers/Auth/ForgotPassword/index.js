/**
 * Created by Raphael Karanja on 2019-02-28.
 */
import React, {Component} from 'react';
import {Button, Container, Form, Input, Item, Label} from "native-base";
import {Text} from "react-native";

class ForgotPassword extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: ''
        }

        this.resetPassword = this.resetPassword.bind(this);
    }
    resetPassword(){

    }
    render() {
        return (
            <Container style={styles.container}>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            onChangeText={(email) => this.setState({email})}
                            autoCorrect={false}
                            autoCapitalize="none"/>
                    </Item>



                    <Button
                        style={{marginTop: 15}}
                        full
                        rounded
                        success
                        onPress={() => this.resetPassword}>
                        <Text style={{color: '#fff'}}>Request password</Text>
                    </Button>

                </Form>
            </Container>
        );
    }
}

export default ForgotPassword;
