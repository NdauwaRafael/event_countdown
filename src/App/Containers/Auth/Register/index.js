/**
 * Created by Raphael Karanja on 2019-02-23.
 */
import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native'
import { Container, Content,  Form, Input, Item, Button, Label, Left, Right, Body, Title, Icon} from 'native-base';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from '../../../../CountdownEventsStore/actions/SignUp'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'raphynje@gmail.com',
            password: 'pass123'
        };

        this.signUp = this.signUp.bind(this);
    }

    static navigationOptions = {
        title: 'Register User',
    };

    signUp() {
        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.actions.createUser(user);
        this.props.navigation.navigate('Loading');

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
                        onPress={()=>this.signUp()}
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