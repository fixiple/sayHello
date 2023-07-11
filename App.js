import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './hello.js';




export default function App() {
    return (
        <View style={styles}>

            <Hello/>
            <Text>Type your name up here.</Text>
            <Text>A surprise awaits....</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
        flex: 1,
        backgroundColor: 'peru',
        alignItems: 'center',
        justifyContent: 'center',
    }
);
