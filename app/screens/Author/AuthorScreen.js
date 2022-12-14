import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableOpacity, StyleSheet, Dimensions, RecyclerViewBackedScrollView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TOUCHABLE_STATE } from "react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome5";
import Avatar from 'react-avatar';

const { height, width } = Dimensions.get('window');
const AuthorScreen = ({ navigation }) => {
    const [listvalue, setListvalue] = useState([]);




    useEffect(() => {
        getapi();
    }, []);
    // const requestOptions = {
    //     method: 'GET',
    //     headers: { "Accept":"application/json",'Content-Type': 'application/json','Authorization': 'Bearer 29b6c0666271758735bb5f8835ad9bfd8d05ee1975f53fbf43f292d5f87b394e',},
    // };
    const getapi = () => {
        fetch(`https://gorest.co.in/public/v2/users`,{
            method: 'GET',
           headers: { "Accept":"application/json",'Content-Type': 'application/json','Authorization': 'Bearer 29b6c0666271758735bb5f8835ad9bfd8d05ee1975f53fbf43f292d5f87b394e',},
        }
        )
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setListvalue(responseJson);
            })
            .catch(error => console.log(error));
    }


    // const deleteapis =(item) =>{
    //     alert(item.id)
    // }

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={styles.authorText}>
                <Text style={styles.AuthText}>Author List</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CreateuserScreen')}>
                    <Image style={styles.addText} source={require('../../assets/images/plus.png')}></Image>
                </TouchableOpacity>
            </View>
            <FlatList data={listvalue}
            renderItem={({ item , index}) => (
                <View style={{ flex: 1, marginVertical: 10 }} key={index}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{flexDirection:'row'}}>
                            {/* {listvalue?.map((element,index)=>{
                                return(
                                    <Avatar key={index} name={item.name} maxInitials={2}></Avatar>
                                )
                            })} */}
                        
                        <Image style={{ height: 50, width: 50, borderRadius: 50, marginLeft: 20 }} source={require('../../assets/images/author.png')}></Image>   
                                <TouchableOpacity
                                onPress={() => {
                                  {
                                    let Id = item.id;
                                    console.log('id>>>>>>>>>>>>>>>>>>>>',Id);
                                     navigation.navigate('Authordetails', {
                                      Id,
                                     });
                                  }
                                }}>
                                    <Text style={styles.listText}>{item.name}</Text>

                                </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={{position:'absolute',right:15}} onPress={() => navigation.navigate('Authordetails')}>
                                <Icon style={styles.rightarrow} name="angle-right" size={22}></Icon>
                                </TouchableOpacity>
                    </View>
                    <View style={{ height: 1, width: 280, borderWidth: 1, borderColor: '#C1BBBB', marginLeft: 70 }}></View>
                </View>
            )}>
        </FlatList>

    
           


        </View>
        
    );
};

export default AuthorScreen;

const styles = StyleSheet.create({
    authorText: {
        flexDirection: 'row',
        backgroundColor: '#6FBBDB',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 35,

    },
    AuthText: {
        fontSize: 20,
        color: 'black',
        fontWeight: '800',
    },
    addText: {
        height: 30,
        width: 30,
    },
    listalgin: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        // justifyContent: 'space-between'
    },

    listText: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: '800',
        marginLeft:10

    },
    rightarrow: {
        marginTop: 11,






    }

})