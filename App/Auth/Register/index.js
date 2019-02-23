/**
 * Created by Raphael Karanja on 2019-02-23.
 */
import React, {Component} from 'react';
import {Container, Content, Header, Form, Input, Item , Button, Label} from 'native-base';
export default class Register extends Component {
    render() {
        return (
            <Container>
                <Form>
                    <Item>
                        <Label>Email</Label>
                        <Input/>
                    </Item>
                </Form>
            </Container>
        );
    }
}