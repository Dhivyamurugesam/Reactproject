import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity,TextInput } from "react-native";
import SimpleGradientProgressbarView from "react-native-simple-gradient-progressbar-view";
import LinearGradient from 'react-native-linear-gradient';

const CreateScreen = ({navigation}) => {
    return(
        <View style={{ flex: 1, backgroundColor: '#120C34' }}>
        <View style={{ flexDirection: 'row', marginTop: 50 }}>
        <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
            <Image style={styles.backImage} source={require('../assets/images/backChevron.png')}></Image>
           </TouchableOpacity>
                <SimpleGradientProgressbarView style={styles.progressColor}
                fromColor="#996DA6" toColor="#71C1E9" progress={1} >
                </SimpleGradientProgressbarView>          
        </View>
        <Text style={styles.welcomeText}>Create your account</Text>
        <Text style={{color:'#B0AFB2',alignSelf:'center',marginBottom:40,fontWeight:'600',fontSize:16}}>Passwords must be at least 8 characters</Text>
        <View style={styles.emailText}>
            <View>
            <TextInput style={styles.gmailText}
             placeholder='Enter your name' 
             placeholderTextColor={'gray'} ></TextInput>
            </View>
            <View>
            <Image style={styles.emailImage} source={require('../assets/images/username.png')}></Image>
            </View>
           </View>
           <View style={styles.emailText}>
            <View>
            <TextInput style={styles.gmailText}
             placeholder='Enter your Email' 
             placeholderTextColor={'gray'} ></TextInput>
            </View>
            <View>
            <Image style={styles.emailImage} source={require('../assets/images/email.png')}></Image>
            </View>
           </View>
           <View style={styles.emailText}>
            <View>
            <TextInput style={styles.gmailText}
            placeholder='Enter your Password'
            placeholderTextColor={'gray'}
            secureTextEntry={true}></TextInput>
            </View>
            <View>
            <Image style={styles.emailImage} source={require('../assets/images/EyeHidden.png')}></Image>
            </View>
           </View>
           <TouchableOpacity onPress={() => navigation.navigate('Home')}>
           <LinearGradient colors={['#7D91C9','#76ADDD','#6DC7EE']}
           start={{ x: 0, y: 0 }}end={{ x: 1, y: 1 }}
           style={styles.linearGradient}>
            <Text style={{color:'white',fontSize:20,fontWeight:'500'}}>Create account!</Text>
           </LinearGradient>
           </TouchableOpacity>
           <View style={{marginTop:20,alignSelf:'center',alignItems:'center'}}>
            <Text style={{color:'#58649E'}}>By creating an account,you agree to our </Text>
            <TouchableOpacity>
                <Text style={{textDecorationLine:'underline',color:'#58649E'}}>terms and conditions</Text>
            </TouchableOpacity>
           </View>
        </View>

    );
};

export default CreateScreen;

const styles= StyleSheet.create({
    backImage: {
        height: 20,
        width: 20,
        marginTop: 10,
        marginLeft: 20
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
        marginHorizontal: 45
    },
    emailText:{
        height:50,
        width:360,
        borderBottomWidth:1,
        borderBottomColor:'#5A66A0',
        alignSelf:'center',
        flexDirection:'row',
        marginBottom:20
       
    },
    gmailText:{
        fontSize:20,
        color:'white',
        height:40,
        width:310,
        marginTop:10,
        fontWeight:'500'

    },
    emailImage:{
        height:20,
        width:20,
        marginLeft:30,
        marginTop:20,
        tintColor:'white'
    },
    linearGradient:{
        height:60,
        width:350,
        borderRadius:10,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:180
    }
})