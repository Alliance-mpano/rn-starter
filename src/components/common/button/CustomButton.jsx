import React from "react";

import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import styles from './customButton.styles';

const CustomButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CustomButton;