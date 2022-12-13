import React from "react";
import { View,Text, StyleSheet } from "react-native";

const SearchScreen = () => {
    return(
        <View style={styles.searchbox}>
            <Text>Hiiiiiiiii</Text>
        </View>
    );
};

export default SearchScreen;

const styles=StyleSheet.create({
    searchbox:{
        height:50,
        width:300,
        alignSelf:'center',
        justifyContent:'center',
        borderWidth:1,
        marginTop:350,
        borderRadius:10
        
    }
})