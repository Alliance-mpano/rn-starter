import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import {
    Image,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import InputText from '../common/textinput/InputText';
import CustomButton from '../common/button/CustomButton';
import { icons } from '../../constants';

import styles from './home.styles';

const Home = ({ navigation }) => {

    const [showImage, setShowImage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);


    const handleLogin = () => {
        console.log('Login');
        navigation.navigate('Home');
    };


    return (
        <>
            <StatusBar style="auto" />
            {showImage ? (
                <SafeAreaView style={styles.landing} >
                    <Image
                        source={require('../../assets/images/agua.png')}
                    />
                </SafeAreaView>
            ) : (
                <SafeAreaView style={styles.container}>

                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../../assets/images/agua-.png')}
                        />
                    </View>
                    <Text
                        style={styles.welcomeText}
                    >Welcome Back!</Text>

                    <View style={{
                        paddingLeft: 40,
                    }}>
                        <InputText
                            label='Email'
                            icon={icons.mail}
                            type='emailAddress'
                            placeholder='johndeo@gmail.com'
                        />
                        <InputText
                            label='Password'
                            icon={icons.lock}
                            type='password'
                            placeholder='********'
                        />
                    </View>

                    <View style={styles.forgotPassword}>
                        <TouchableOpacity>
                            <Text style={styles.msg}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <CustomButton
                        text={'Login'}
                        onPress={handleLogin}
                    />
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 20,
                    }}>
                        <Text
                            style={{
                                color: '#000000',
                                fontSize: 12,
                            }}
                        >Don't have an account?</Text>
                        <TouchableOpacity>
                            <Text style={{
                                color: '#0F5588',
                                fontSize: 12,
                                fontWeight: 700,
                                marginLeft: 5,
                            }}>Register</Text>
                        </TouchableOpacity>
                    </View>

                    <Text
                        style={{
                            color: '#000000',
                            fontSize: 12,
                            alignSelf: 'center',
                            marginTop: 16,
                        }}
                    >OR</Text>
                        <TouchableOpacity style={{
                            borderRadius: "5px",
                            border: "1px solid rgba(15, 85, 136, 0.76)",
                            background: "#FFF",
                        }}>
                            <Text>
                                Continue with <Text style = {{fontWeight: 600}}>Google</Text>
                            </Text>
                        </TouchableOpacity>

                    

                </SafeAreaView>
            )}
        </>
    );
};

export default Home;