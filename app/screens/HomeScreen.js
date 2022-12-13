import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', marginTop: 50, marginHorizontal: 5 }}>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Image style={styles.backImage} source={require('../assets/images/backChevron.png')}></Image>
                </TouchableOpacity>
                <Image style={{ height: 40, width: 150,marginLeft:10 }} source={require('../assets/images/EmbassyLogo_Blue.png')}></Image>
                <Image style={{ height: 20, width: 20, marginTop: 10, marginLeft: 80 }}
                    source={require('../assets/images/favorites.png')}></Image>
                <Image style={{ height: 30, width: 30, tintColor: 'black', marginTop: 5, marginHorizontal: 15 }}
                    source={require('../assets/images/notifications-icon-simple.png')}></Image>
                <Image style={{ height: 20, width: 20, marginTop: 10 }}
                    source={require('../assets/images/myPost_forward_Icon.png')}></Image>
            </View>
            <View style={{ width: 400, height: 2, borderColor: '#E8E8E8', borderWidth: 1, marginTop: 20 }}></View>
            <Text style={styles.tittleText}>Trending Creators</Text>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <View style={{ marginRight: 10 }}>
                        <Image style={styles.slideText} source={require('../assets/images/embassy1.png')}></Image>
                        <View style={styles.profilePosition}>
                            <Image style={styles.profileImage} source={require('../assets/images/eprofile1.png')}></Image>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.profileText}>Laurens</Text>
                                <Text style={styles.profileText}>Peterson</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <Image style={styles.slideText} source={require('../assets/images/embassy2.png')}></Image>
                        <View style={styles.profilePosition}>
                            <Image style={styles.profileImage} source={require('../assets/images/eprofile2.png')}></Image>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.profileText}>Laurens</Text>
                                <Text style={styles.profileText}>Peterson</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <Image style={styles.slideText} source={require('../assets/images/embassy3.png')}></Image>
                        <View style={styles.profilePosition}>
                            <Image style={styles.profileImage} source={require('../assets/images/eprofile3.png')}></Image>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.profileText}>Laurens</Text>
                                <Text style={styles.profileText}>Peterson</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <Image style={styles.slideText} source={require('../assets/images/embassy4.png')}></Image>
                        <View style={styles.profilePosition}>
                            <Image style={styles.profileImage} source={require('../assets/images/eprofile4.png')}></Image>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.profileText}>Laurens</Text>
                                <Text style={styles.profileText}>Peterson</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Text style={styles.tittleText}>Get Started</Text>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <View style={{marginRight:20}}>
                        <Image style={styles.videoImage} source={require('../assets/images/Thumbnails-04.png')}></Image>
                        <View style={styles.playView}>
                            <Image style={styles.playImage} source={require('../assets/images/play_arrow.png')}></Image>
                        </View>
                    </View>
                    <View>
                        <Image style={styles.videoImage} source={require('../assets/images/Thumbnails-03.png')}></Image>
                        <View style={styles.playView}>
                            <Image style={styles.playImage} source={require('../assets/images/play_arrow.png')}></Image>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottomText}>
                <View style={styles.emailImage}>
                <Image style={styles.playImage} source={require('../assets/images/email.png')}></Image>
                </View>
                <View style={{flexDirection:'column',marginLeft:10}}>
                    <Text style={{color:'black',fontSize:18,fontWeight:'500'}}>Verify your contact info!</Text>
                    <Text style={{color:'gray'}}>Add an email to manage requests</Text>
                </View>
                <View style={styles.closeText}>
                <Image style={styles.closeImage} source={require('../assets/images/close.png')}></Image>

                </View>

            </View>
        </View>


    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    backImage: {
        height: 20,
        width: 20,
        marginTop: 10,
        marginLeft: 20
    },
   
    tittleText: {
        fontSize: 25,
        marginLeft: 20,
        marginTop: 20,
        fontWeight: '600',
        marginBottom: 20,
        color: 'black'
    },
    slideText: {
        height: 220,
        width: 180,
        borderRadius: 25

    },
    profilePosition: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 10,
        marginLeft: 10,


    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 50
    },
    profileText: {
        fontSize: 15,
        color: 'white',
        marginLeft: 10,
        fontWeight: '800',


    },
    videoImage: {
        height: 180,
        width: 350,
        borderRadius: 25

    },
    playView: {
        height: 50,
        width: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 80
    },
    playImage: {
        height: 20,
        width: 20
    },
    bottomText:{
        height:80,
        width:360,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#D8D8D8',
        marginHorizontal:20,
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    emailImage:{
        height:50,
        width:50,
        borderRadius:50,
        backgroundColor:'#FE9D2B',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10
    },
    closeText:{
        height:30,
        width:30,
        borderRadius:50,
        borderWidth:1,
        borderColor:'#D8D8D8',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20

    },
    closeImage:{
        height:30,
        width:30,
        tintColor:'black'

    }
})