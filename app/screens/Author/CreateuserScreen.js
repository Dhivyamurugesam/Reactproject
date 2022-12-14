import React, { useState } from "react";
import { StyleSheet, TextInput,Text, TouchableOpacity, View, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');
 
const CreateuserScreen = ({navigation}) => {

    const [name,setName]= useState({});
    const [email,setEmail]= useState({});
    const [gender,setGender]= useState({});
    const [status,setStatus]= useState({});
console.log('jdfhkjdghdfjkh',name);
    const requestOptions = {
        method: 'POST',
        headers: { "Accept":"application/json",'Content-Type': 'application/json','Authorization': 'Bearer 29b6c0666271758735bb5f8835ad9bfd8d05ee1975f53fbf43f292d5f87b394e',},
        body: JSON.stringify({"name":name, "gender":gender, "email":email, "status":status})
    };
  
    const postExample = async () => {
        try {
            await fetch(
                'https://gorest.co.in/public/v2/users', requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                            console.log(data,"data")
                            navigation.navigate('AuthorScreen');
                        });
                })
        }
        catch (error) {
            console.error(error);
        }
    }
    return(
        <View>
            <View style={styles.authorText}>
                <TouchableOpacity onPress={() => navigation.navigate('AuthorScreen')}>
                <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
                </View>
                <Text style={styles.AuthText}>Create New User </Text>
           
            <View style={styles.viewText}>
            <TextInput style={styles.inputText}
            placeholder="Enter your user Name"
            placeholderTextColor="gray"
            value={name}
            onChangeText={(text) => setName(text)}></TextInput>
             <TextInput style={styles.inputText}
            placeholder="Enter your email"
            placeholderTextColor="gray"
            value={email}
            onChangeText={(text) => setEmail(text)}></TextInput>
             <TextInput style={styles.inputText}
            placeholder="Gender"
            placeholderTextColor="gray"
            value={gender}
            onChangeText={(text) => setGender(text)} ></TextInput>
             <TextInput style={styles.inputText}
            placeholder="Status"
            placeholderTextColor="gray"
            value={status}
            onChangeText={(text) => setStatus(text)} ></TextInput>
            <TouchableOpacity style={styles.savebox} onPress={postExample}>
                <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

export default CreateuserScreen;

const styles=StyleSheet.create({
    authorText: {
        flexDirection: 'row',
        backgroundColor: '#6FBBDB',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        height:100,
        width:width,
        alignItems:'center'

    },
    AuthText: {
        fontSize: 20,
        color: 'black',
        fontWeight: '800',
        marginTop:10,
        alignSelf:'center'
    },
    viewText:{
        alignItems:'center',
        marginTop:20

    },
    closeText:{
        fontSize:20,
        fontWeight:'800',
        color:'black',
        marginTop:60

    },
    inputText:{
        height:50,
        width:350,
        backgroundColor:'#D9D9D9',
        borderRadius:10,
        marginVertical:10,
        paddingStart:10,
        fontSize:18
    },
    savebox:{
        height:50,
        width:350,
        borderRadius:10,
        marginVertical:10,
        backgroundColor:'#6FBBDB',
        alignItems:'center',
        justifyContent:'center'
    },
    saveText:{
        fontSize:20,
        fontWeight:'600'
    }
})