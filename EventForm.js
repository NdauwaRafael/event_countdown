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

    },
    button: {
        height: 50,
        backgroundColor: "#48BBEC",
        borderColor: "#48BBEC",
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    }
});

class EventForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event_title: ''
        };

        this.handleAddPress = this.handleAddPress.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
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
                    style={styles.button}
                    onPress={this.handleAddPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default EventForm;