import React, { useEffect, useState } from "react";
import { View, Text, FlatList,Image, ScrollView } from "react-native";

const HandScreen = () => {
    const [listvalue, setListvalue] = useState([]);
    useEffect(() => {
        fetch(
            `https://dummyjson.com/products?limit=10&skip=0&select=title,price`,
            {
                method: 'GET',
            },
        )
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setListvalue(responseJson.products);
            })
            .catch(error => console.log(error));

    });
    
    return (
        <ScrollView style={{marginTop:50}}>
            <FlatList data={listvalue}
                renderItem={({item}) => (
                    <View style={{flex:1,marginVertical:10}}>
                        <View style={{flexDirection:'row'}}>
                            <Image style={{height:50,width:50,borderRadius:50,marginLeft:20}} source={require('../assets/images/mobile1.png')}></Image>
                        <Text style={{marginTop:10,marginLeft:20,fontSize:20,fontWeight:'800'}}>{item.title}</Text>
                       
                        </View>
                        <View style={{height:1,width:280,borderWidth:1,borderColor:'#C1BBBB',marginLeft:70}}></View>
                    </View>
                )}>
            </FlatList>
        </ScrollView>
    );
};

export default HandScreen;