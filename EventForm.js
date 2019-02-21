import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({

});
class EventForm extends Component {
    static navigationOptions = {
        title: 'Add Event',
    };

    handleAddPress() {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View>
                <TouchableHighlight
                    onPress={this.handleAddPress.bind(this)}>
                    <Text>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default EventForm;