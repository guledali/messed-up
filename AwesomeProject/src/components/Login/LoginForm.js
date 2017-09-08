import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
            <StatusBar
            barStyle="light-content"
            />
            <TextInput
                placeholder="Username"
                placeholderTextColor="rgba(255,255,255,0.9)"
                style={styles.input}
                />
            <TextInput 
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.9)"
                secureTextEntry 
                style={styles.input}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#1db540',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '900'
    }
});