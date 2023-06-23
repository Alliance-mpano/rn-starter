import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const LoginScreen = () => {
    return <View>
        <Button title="Increase" onPress={() => {
            setCounter(counter + 1)
        }} />

        <Button title="Decrease" onPress={() => {
            setCounter(counter - 1)
        }} />

        <Text>Counter reads: {counter}</Text>
    </View>
};

const styles = StyleSheet.create({})

export default LoginScreen;