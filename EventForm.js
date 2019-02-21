import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    text: {}
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
            <View style={{flex: 1}}>
                <View style={styles.fieldContainer}>
                    <TextInput style={styles.tetx}/>
                </View>
                <TouchableHighlight
                    onPress={this.handleAddPress.bind(this)}>
                    <Text>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default EventForm;