import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TOUCHABLE_STATE } from "react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable";
import Modal from "react-native-modal";


const AuthorScreen = ({navigation}) => {
    const [listvalue, setListvalue] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
  

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    useEffect(() => {
        getapi();
      },[]);
    const getapi =() => {
         fetch(`https://gorest.co.in/public/v2/users`,
            {
                method: 'GET',
                bearer:'8458b5c163f85ac55faf0b798f2ea81474af710cfc5791c318d9f0152ace6e64',
            },
        )
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setListvalue(responseJson);
            })
            .catch(error => console.log(error));
    }
   
    
    // const dataid = route.params?.Id;
    // console.log('author_Id------> ',dataid );
    const deleteapi = (id) =>{
        console.log(id,"5655555");
        fetch(
            `https://gorest.co.in/public/v2/users/`+id,
            {
                method: 'DELETE',
                bearer:'8458b5c163f85ac55faf0b798f2ea81474af710cfc5791c318d9f0152ace6e64',
            },
        )
        // .then((response) => {
        //     var res=response;
        //     getapi();
        // })
        // .then((res,err)=>{
        //     if(res)
        //     console.log(res)
        //     if(err)
        //     console.log(err)

        // })

    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View style={styles.authorText}>
                    <Text style={styles.AuthText}>Author List</Text>
                    <TouchableOpacity>
                        <Image style={styles.addText} source={require('../../assets/images/plus.png')}></Image>
                    </TouchableOpacity>
                </View>
                <FlatList data={listvalue}
                    renderItem={({ item ,index}) => (
                        <View style={{ flex: 1, marginVertical: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
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
                                <TouchableOpacity onPress={toggleModal} style={styles.deleteText}>
                                    <Image style={{ height: 20, width: 20, marginTop: 5 }} source={require('../../assets/images/menu.png')}></Image>
                                </TouchableOpacity>
                                {!isModalVisible && (
                                    <View style={styles.modalText}>
                
                                        <Text  onPress={()=>deleteapi(index)} style={styles.editText}>Delete</Text>
                                        <Text onPress={toggleModal} style={styles.editText}>Edit</Text>
                                    </View>
                                )}
                            </View>
                            <View style={{ height: 1, width: 280, borderWidth: 1, borderColor: '#C1BBBB', marginLeft: 70 }}></View>
                        </View>
                    )}>
                </FlatList>
            </ScrollView>



        </View>
    );
};

export default AuthorScreen;

const styles = StyleSheet.create({
    authorText: {
        flexDirection: 'row',
        height: 100,
        width: 420,
        backgroundColor: '#6FBBDB',
        alignItems: 'center'
    },
    AuthText: {
        marginTop: 20,
        fontSize: 20,
        marginLeft: 20,
        color: 'black',
        fontWeight: '800',
    },
    addText: {
        marginTop: 20,
        height: 30,
        width: 30,
        marginLeft: 220,
        fontWeight: '800',

    },
    deleteText: {
        position: 'absolute',
        right: 5,
        flexDirection: 'column'
    },
    listText: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 18,
        fontWeight: '800'

    },
    modalText: {

        flexDirection: 'column',
        backgroundColor: 'white',
        position: 'absolute',
        right: 5
    },
    editText: {
        fontSize: 18,
        color: 'black',
        marginHorizontal: 10,
        marginVertical: 2
    }
})