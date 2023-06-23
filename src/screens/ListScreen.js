import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: 'Sam', age: 20 },
        { name: 'Sam2', age: 22 },
        { name: 'Sam3', age: 23 },
        { name: 'Sam4', age: 24 },
        { name: 'Sam5', age: 25 },
        { name: 'Sam6', age: 26 },
        { name: 'Sam7', age: 27 },
        { name: 'Sam8', age: 28 },
        { name: 'Sam9', age: 29 },
        { name: 'Sam10', age: 30 },
        { name: 'Sam11', age: 31 }
    ]
    return <FlatList
        //horizontal={true}
        //showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }} />;
};

const styles = StyleSheet.create({
    listStyle: {
        fontSize: 30
    },
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;