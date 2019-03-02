import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { Header } from '../setions/Header';
import { StackNavigator } from 'react-navigation';

export class Contact extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            name: '',
            email: ''
        }
    }
    clearFields = () => ({ name: '', msg: '', email: '' });

    sendMessage = () => {
        let alertMessage = (this.state.msg + '\n\n' + this.state.email)
        Alert.alert(this.state.name, alertMessage);
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.container}>
                <Header message='Press to Login' />
                <Text style={styles.heading}>Contact Us</Text>

                <TextInput
                    style={styles.inputs}
                    placeholder={"PUT YOUR NAME HERE FOOL"}
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}
                />
                <TextInput
                    style={styles.multiInputs}
                    placeholder={"PUT A MESSAGE HERE FOOL"}
                    onChangeText={(text) => this.setState({ msg: text })}
                    value={this.state.msg}
                    multiline={true}
                    numberOfLines={4}
                />
                <TextInput
                    style={styles.inputs}
                    placeholder={"EMAIL GOES HERE FOOL"}
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                />

                <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Send Message
                </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Clear Fields
                </Text>
                </TouchableHighlight>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%'
    },
    heading: {
        fontSize: 16,
        flex: 1,
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    multiInputs: {
        flex: 2,
        width: '80%',
        padding: 10,
        paddingTop: 20,
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    buttons: {
        marginTop: 15,
        fontSize: 16,
        backgroundColor: 'teal',
        padding: 5,
        borderWidth: 2,
        borderColor: 'blue'
    }

})