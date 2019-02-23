/**
 * Created by Raphael Karanja on 2019-02-23.
 */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native'
import {Container, Content, Header, Form, Input, Item , Button, Label} from 'native-base';
export default class Register extends Component {
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
                </Form>
            </Container>
        );
    }
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center"
    }
})