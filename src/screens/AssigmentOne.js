import React from "react";
import {
    Text, View, StyleSheet
} from "react-native";

const AssigmentOne = () => {
    const myName = 'Stanley G. Mwizerwa'
    return (
        <View>
            <Text style={styles.h1Style}>Getting started with react native!</Text>
            <Text style={styles.h2Style}>My name is {myName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    h1Style: {
        fontSize: 45
    },
    h2Style: {
        fontSize: 20
    }
});
export default AssigmentOne;