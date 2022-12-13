import React from "react";
import { View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#120C34', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('FristScreen')}>
            <Image style={{ height: 100, width: 300 }} source={require('../assets/images/EmbassyLogo.png')}></Image>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;