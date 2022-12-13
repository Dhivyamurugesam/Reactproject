import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const FristScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#120C34' }}>
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
                <Image style={styles.backImage} source={require('../assets/images/backChevron.png')}></Image>
                <Image style={styles.logoImage} source={require('../assets/images/EmbassyLogo.png')}></Image>
            </View>
            <Text style={styles.welcomeText}>Welcome back!</Text>
            <TouchableOpacity style={styles.instagram}>
                <Image style={styles.instaImage} source={require('../assets/images/instagram.png')}></Image>
                <Text style={{color:'white',fontSize:20,marginHorizontal:20,fontWeight:'800'}}>Log in with Instagram</Text>
                <Image style={{height:15,width:15,marginLeft:10}} source={require('../assets/images/right_bold_arrow.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.instagram}>
                <Image style={styles.instaImage} source={require('../assets/images/tiktokIcon.png')}></Image>
                <Text style={{color:'white',fontSize:20,marginHorizontal:20,fontWeight:'800'}}>Log in with TikTok</Text>
                <Image style={{height:15,width:15,marginLeft:45}} source={require('../assets/images/right_bold_arrow.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={{fontSize:18,color:'white',alignSelf:'center',marginTop:20,fontWeight:'700'}}>Log in with email instead</Text>
            </TouchableOpacity>



        </View>
    );
};

export default FristScreen;

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
        marginTop: 150,
        alignSelf: 'center',
        marginBottom: 55
    },
    instagram: {
        height: 100,
        width: 350,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#364072',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:20


    },
    instaImage: {
        height: 40,
        width: 40,
        marginLeft: 20,

    }

})