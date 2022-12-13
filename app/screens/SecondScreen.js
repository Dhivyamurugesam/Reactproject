import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import SimpleGradientProgressbarView from "react-native-simple-gradient-progressbar-view";
const SecondScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#120C34' }}>
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
                <TouchableOpacity onPress={() => navigation.navigate('FristScreen')}>
                <Image style={styles.backImage} source={require('../assets/images/backChevron.png')}></Image>
                </TouchableOpacity>
                    <SimpleGradientProgressbarView style={styles.progressColor}
                    fromColor="#996DA6" toColor="#71C1E9" progress={0.60} >

                    </SimpleGradientProgressbarView>
                
            </View>
            <Text style={styles.welcomeText}>To get started,let's connect your brand.</Text>
            <TouchableOpacity style={styles.instagram}>
                <Image style={styles.instaImage} source={require('../assets/images/instagram.png')}></Image>
                <Text style={{ color: 'white', fontSize: 20, marginHorizontal: 20, fontWeight: '800' }}>Sign up with Instagram</Text>
                <Image style={{ height: 15, width: 15, }} source={require('../assets/images/right_bold_arrow.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.instagram}>
                <Image style={styles.instaImage} source={require('../assets/images/tiktokIcon.png')}></Image>
                <Text style={{ color: 'white', fontSize: 20, marginHorizontal: 20, fontWeight: '800' }}>Sign up with TikTok</Text>
                <Image style={{ height: 15, width: 15, marginLeft: 35 }} source={require('../assets/images/right_bold_arrow.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
                <Text style={{ fontSize: 18, color: 'white', alignSelf: 'center', marginTop: 20, fontWeight: '700' }}>Sign up with email instead</Text>
            </TouchableOpacity>
           <Text style={{color:'#58649E',alignSelf:'center',marginTop:170}}>By connecting social media and creating an account,</Text> 
           <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center'}}>
            <Text style={{color:'#58649E'}}>you agree to our </Text>
            <TouchableOpacity>
                <Text style={{textDecorationLine:'underline',color:'#58649E'}}>terms and conditions</Text>
            </TouchableOpacity>
           </View>



        </View>
    );
};

export default SecondScreen;

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
        marginHorizontal: 100,
    },
    progressColor:{
        width:330,
        height:4,
        marginTop:18,
        backgroundColor:'#364072'
    },
    welcomeText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '800',
        marginTop: 100,
        alignSelf: 'center',
        marginBottom: 55,
        marginHorizontal: 45
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
        marginBottom: 20
    },
    instaImage: {
        height: 40,
        width: 40,
        marginLeft: 20,
    },


})