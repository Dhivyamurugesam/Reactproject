import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";

const Authordetails = ({navigation}) => {
    const route=useRoute();
    const [listvalue, setListvalue] = useState([]);
    const dataid = route.params?.Id;
  console.log('Student_Id------> ', dataid);


    useEffect(() => {
        
        fetch(
            `https://gorest.co.in/public/v2/posts?user_id=${dataid}`,
            {
                
                method: 'GET',
                bearer:'8458b5c163f85ac55faf0b798f2ea81474af710cfc5791c318d9f0152ace6e64'
            },
        )
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setListvalue(responseJson);
            })
            .catch(error => console.log(error));

    },[]);
   
    console.log('list---->',listvalue);

    return (
        <View style={{backgroundColor:'white'}}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity  onPress={() => navigation.navigate('Author')}>
            <Image style={styles.backimage} source={require('../../assets/images/backChevron.png')}></Image>
            </TouchableOpacity>
              <Image style={styles.bookimage} source={require('../../assets/images/book.png')}></Image>
              </View>
            <FlatList data={listvalue}
            renderItem={({item}) => (
                <View>
                  
                    <Text style={styles.texttitle}>Title:</Text>
                    <Text style={styles.textbody}>{item.title}</Text>
                    <Text style={styles.texttitle}>Body:</Text>
                    <Text style={styles.textbody}>{item.body}</Text>
                    
                </View>

            )}>

            </FlatList>

           
                       
                        
            
     </View >
        
    );
};
export default Authordetails;

const styles=StyleSheet.create({
    texttitle:{
        marginLeft:10,
        fontSize:20,
        color:'black',
        fontWeight:'800'
    },
    textbody:{
        marginVertical:10,
        marginLeft:30,
        fontSize:16,
        marginHorizontal:20
    },
    bookimage:{
        marginLeft:20,
        marginTop:20
    },
    backimage:{
        height:20,
        width:20,
        marginTop:40,
        marginLeft:20

    }
})