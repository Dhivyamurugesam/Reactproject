import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import  Icon  from "react-native-vector-icons/Ionicons";
import { useLoginMutation } from "../services/AuthService";


const LoginScreen = ({ navigation }) => {

    // state values
    const [email, setEmail] = useState ('');
    const [textEmail, setTextemail] = useState(false);
    const [password, setPassword] = useState('');
    const [textPassword, setTextpassword] = useState(false);
    const [passwordvisible, setPasswordVisiable] = useState(true);
    
    // props values or API reference
    const [login, { data, isSuccess, isLoading, error, isError }] =
        useLoginMutation();


    // Should component update
    useEffect(() => {
        console.log('-----', isSuccess);
        if (isSuccess) {
        }
    }, [isSuccess]);

    const triggerLoginAPI = () => {
        let loginReqObj = {
            email: email,
            password: password,
        };
        console.log('email -----> ', email);
        console.log('triggerLoginAPI', loginReqObj);
        login(loginReqObj);

        if (email.trim() === '') { setTextemail(true) }
        else { setTextemail(false) }
        if (password.trim() === '') { setTextpassword(true) }
        else { setTextpassword(false); navigation.navigate('Home') }
    }
        return (
            <View style={{ flex: 1, backgroundColor: '#120C34' }}>
                <View style={{ flexDirection: 'row', marginTop: 50 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('FristScreen')}>
                        <Image style={styles.backImage} source={require('../assets/images/backChevron.png')}></Image>
                    </TouchableOpacity>
                    <Image style={styles.logoImage} source={require('../assets/images/EmbassyLogo.png')}></Image>
                </View>
                <Text style={styles.welcomeText}>Welcome back!</Text>
                <View style={styles.emailText}>
                    <View>
                        <TextInput style={styles.gmailText}
                            placeholder='Enter your Email'
                            placeholderTextColor={'gray'}
                            value={email}
                            onChangeText={text => setEmail(text)}>
                        </TextInput>
                        {textEmail && (
                            <Text style={{ fontSize: 12, color: 'red', marginLeft: 40 }}>Please Enter email id</Text>
                        )}
                    </View>
                    <View>
                        <Icon style={styles.emailImage} color='white' size={25} name="mail-outline"></Icon>
                    </View>
                </View>
                <View style={styles.emailText}>
                    <View>
                        <TextInput style={styles.gmailText}
                            placeholder='Enter your Password'
                            placeholderTextColor={'gray'}
                            secureTextEntry={passwordvisible}
                            value={password}
                            onChangeText={text => setPassword(text)}>
                        </TextInput>
                        {textPassword && (
                            <Text style={{ fontSize: 12, color: 'red', marginLeft: 40 }}>Please Enter password</Text>
                        )}
                    </View>
                    <View>
                        <Icon style={styles.emailImage} 
                        name={passwordvisible ? 'eye-off':'eye'} 
                        color='white' size={24}
                        onPress={() => setPasswordVisiable(!passwordvisible)} ></Icon>
                    </View>
                </View>
                <TouchableOpacity onPress={triggerLoginAPI}>
                    <LinearGradient colors={['#7D91C9', '#76ADDD', '#6DC7EE']}
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                        style={styles.linearGradient}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Log in</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Text style={{ color: 'white', marginTop: 20 }}>Create an Account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
                        <Text style={{ color: 'skyblue', marginTop: 20, fontWeight: '500' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    };


    export default LoginScreen;

    const styles = StyleSheet.create({
        backImage: {
            height: 20,
            width: 20,
            marginTop: 10,
            marginLeft: 20
        },
        logoImage: {
            height: 45,
            width: 150,
            marginHorizontal: 80,
        },
        welcomeText: {
            color: 'white',
            fontSize: 30,
            fontWeight: '800',
            marginTop: 200,
            alignSelf: 'center',
            marginBottom: 70
        },
        emailText: {
            height: 50,
            width: 360,
            borderBottomWidth: 1,
            borderBottomColor: '#5A66A0',
            alignSelf: 'center',
            flexDirection: 'row',
            marginBottom: 20

        },
        gmailText: {
            fontSize: 20,
            color: 'white',
            height: 40,
            width: 310,
            marginTop: 10

        },
        emailImage: {
            marginLeft: 20,
            marginTop: 20
        },
        linearGradient: {
            height: 60,
            width: 350,
            borderRadius: 10,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 150
        }

    })