import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";

const Authordetails = ({ navigation }) => {
    const route = useRoute();
    const [listvalue, setListvalue] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const dataid = route.params?.Id;
    console.log('Student_Id------> ', dataid);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    useEffect(() => {

        fetch(
            `https://gorest.co.in/public/v2/posts?user_id=${dataid}`,
            {

                method: 'GET',
                bearer: '8458b5c163f85ac55faf0b798f2ea81474af710cfc5791c318d9f0152ace6e64'
            },
        )
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setListvalue(responseJson);
            })
            .catch(error => console.log(error));

    }, []);
    

    console.log('list---->', listvalue);

    const deleteapis = () => {
        console.log("delete")
        // alert(item.id)
        // var body={id:item.id}
         console.log(dataid, "5655555");
        fetch(
            `https://gorest.co.in/public/v2/users/${dataid}`,
            {
                method: 'DELETE',
                headers: { "Accept":"application/json",'Content-Type': 'application/json','Authorization': 'Bearer 29b6c0666271758735bb5f8835ad9bfd8d05ee1975f53fbf43f292d5f87b394e',},
            },
        )
            .then(response => response.json())
           
            .catch(error => console.log(error));

    }

    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('AuthorScreen')}>
                    <Image style={styles.backimage} source={require('../../assets/images/backChevron.png')}></Image>
                </TouchableOpacity>
                <Image style={styles.bookimage} source={require('../../assets/images/book.png')}></Image>
                <TouchableOpacity onPress={toggleModal} style={styles.deleteText}>
                    <Image style={{ height: 20, width: 20, marginTop: 5 }} source={require('../../assets/images/menu.png')}></Image>
                </TouchableOpacity>

                 {isModalVisible && (
                    <View style={styles.modalText}>

                        <Text onPress={deleteapis} style={styles.editText}>Delete</Text>
                        <Text onPress={toggleModal} style={styles.editText}>Edit</Text>
                    </View>
                )} 
            </View>
            <FlatList data={listvalue}
                renderItem={({ item }) => (
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

const styles = StyleSheet.create({
    texttitle: {
        marginLeft: 10,
        fontSize: 20,
        color: 'black',
        fontWeight: '800'
    },
    textbody: {
        marginVertical: 10,
        marginLeft: 30,
        fontSize: 16,
        marginHorizontal: 20
    },
    bookimage: {
        marginLeft: 20,
        marginTop: 20
    },
    backimage: {
        height: 20,
        width: 20,
        marginTop: 40,
        marginLeft: 20

    },
    modalText: {

        flexDirection: 'column',
        backgroundColor: 'white',
        position: 'absolute',
        right: 5,
        marginTop:50
    },
    editText: {
        fontSize: 18,
        color: 'black',
        marginHorizontal: 10,
        marginVertical: 2
    },
    deleteText: {
        position: 'absolute',
        right: 8,
        flexDirection: 'column',
        marginTop: 30
    },
})