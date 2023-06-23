import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const greeting = 'Bye there!'
    const jsxText = <Text>Learning imbeded jsx</Text>
    return <View>
        <Text style={styles.textStyle}>This is my custom component</Text>
        <Text>{greeting}</Text>
        {jsxText}
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;