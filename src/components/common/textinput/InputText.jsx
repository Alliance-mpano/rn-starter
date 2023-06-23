import React from "react";

import {
    View,
    TextInput,
    Text,
    Image
} from 'react-native';

import styles from "./textInput.style";

const InputText = ({ label, icon, type, placeholder }) => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.label}
            >{label}</Text>
            <View
                style={styles.inputSection}
            >
                <Image
                    source={icon}
                    style={styles.icon}
                />
                <TextInput
                    placeholder={placeholder}
                    underlineColorAndroid="transparent"
                    textContentType={type}
                />
            </View>
        </View>
    );
};

export default InputText;
