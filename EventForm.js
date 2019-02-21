import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {formatDateTime} from "./api";

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
    borderTop: {
        borderColor: "#edeeef",
        borderTopWidth: 0.5
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
            event_title: '',
            event_date: '',
            showDatePicker: true
        };

        this.handleAddPress = this.handleAddPress.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleDatePress = this.handleDatePress.bind(this);
        this.handleDatePicked = this.handleDatePicked.bind(this);
        this.handleDatePickerHide = this.handleDatePickerHide.bind(this);
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
    };
    handleDatePress(){
        this.setState({
            showDatePicker: true
        })
    }

    handleDatePicked(date){
        this.setState({
            event_date: date
        });
        this.handleDatePickerHide()
    }
    handleDatePickerHide(){
        this.setState({
            showDatePicker: false
        })
    }
    render() {
        const {event_title, event_date, showDatePicker} = this.state;
        return (
            <View style={{flex: 1}}>
                <View style={styles.fieldContainer}>
                    <TextInput
                        style={styles.tetx}
                        placeholder="Event Title"
                        value={event_title}
                        onChangeText={this.handleChangeTitle}
                        spellCheck={false}/>

                    <TextInput
                    style={[styles.text, styles.borderTop]}
                    placeholder="Event Date"
                    value={formatDateTime(event_date.toString())}
                    spellCheck={false}
                    editable={!showDatePicker}
                    onFocus={this.handleDatePress}/>
                    <DateTimePicker
                    isVisible={showDatePicker}
                    mode="datetime"
                    onConfirm={this.handleDatePicked}
                    onCancel={this.handleDatePickerHide}/>

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