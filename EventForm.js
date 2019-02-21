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
    text: {
        height: 40,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10,

    }
});

class EventForm extends Component {
    state = {
        event_title: ''
    }
    static navigationOptions = {
        title: 'Add Event',
    };

    handleAddPress() {
        this.props.navigation.goBack()
    };

    handleChangeTitle(value) {
        this.setState({
            event_title: value
        })
    }

    render() {
        const {event_title} = this.state;
        return (
            <View style={{flex: 1}}>
                <View style={styles.fieldContainer}>
                    <TextInput
                        style={styles.tetx}
                        placeholder="Event Title"
                        value={event_title}
                        onChangeText={this.handleChangeTitle}
                        spellCheck={false}/>
                </View>
                <TouchableHighlight
                    onPress={this.handleAddPress}>
                    <Text>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default EventForm;