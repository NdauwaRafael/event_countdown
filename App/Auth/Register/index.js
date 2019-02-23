/**
 * Created by Raphael Karanja on 2019-02-23.
 */
import React, {Component} from 'react';
import {StyleSheet} from 'react-native'
import {Container, Content, Header, Form, Input, Item , Button, Label} from 'native-base';
export default class Register extends Component {
    render() {
        return (
            <Container>
                <Form>
                    <Item>
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

const styles =StyleSheet.create({})