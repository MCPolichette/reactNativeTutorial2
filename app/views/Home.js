import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../setions/Header';
import { Hero } from '../setions/Hero';
import { Menu } from '../setions/Menu';
import { StackNavigator } from 'react-navigation';


export class Home extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header message='Press to Login' />
                <Hero />
                <Menu navigate={navigate} />
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})