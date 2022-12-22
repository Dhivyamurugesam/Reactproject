import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";

const { height, width } = Dimensions.get('window');

const Authordetails = ({ navigation }) => {
    const route = useRoute();
    const [listvalue, setListvalue] = useState([]);
    const [titlevalue, setTitlevalue] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [nameEdittext, setNameedittext] = useState(false);

    const dataid = route.params?.Id;

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const viewmodal = () => {
        setNameedittext(!nameEdittext);
    };

    useEffect(() => {
        getvalue();
        gettitle();
    }, [])

    const getvalue = () => {
        fetch(`https://gorest.co.in/public/v2/users?id=${dataid}`, {
            method: 'GET',
            headers: { "Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': 'Bearer b55dae3b7f03b68edcbcd7eb32ee00e3912361145f4d99e8dbccce7200ac4e1d', },
        }
        )
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                setListvalue(responseJson);
            })
            .catch(error => console.log(error));
    }

    const gettitle=() => {
        fetch(
            `https://gorest.co.in/public/v2/posts?user_id=${dataid}`,
            {
                method: 'GET',
                headers: { "Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': 'Bearer b55dae3b7f03b68edcbcd7eb32ee00e3912361145f4d99e8dbccce7200ac4e1d', },
            },
        )
            .then(response => response.json())
            .then(responseJson => {
                setTitlevalue(responseJson);
            })
            .catch(error => console.log(error));
    };

    const editExample = async () => {    
        try {
            await fetch(
                `https://gorest.co.in/public/v2/users/${dataid}`,
                {
                    method: 'PUT',
                    headers: { "Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': 'Bearer b55dae3b7f03b68edcbcd7eb32ee00e3912361145f4d99e8dbccce7200ac4e1d', },
                    body: JSON.stringify(user)
                })
                .then(response => {
                    setNameedittext(!nameEdittext);
                    getvalue()
                })
        }
        catch (error) {
            console.error(error);
        }
    }

    // render author details
    const renderlistvalue = ({ item }) => {
        return (
            <View>
                <View style={{ marginTop: 5, flexDirection: 'row' }}>
                    <Text style={styles.texttitle}>Id </Text>
                    <Text style={styles.colone}>: </Text>
                    <Text style={{ fontSize: 18 }}>{item.id}</Text>
                </View>
                <View style={{ marginTop: 5, flexDirection: 'row' }}>
                    <Text style={styles.texttitle}>Name  </Text>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '800', marginLeft: 20 }}>: </Text>
                    <Text style={{ fontSize: 18 }}>{item.name}</Text>
                </View>
                <View style={{ marginTop: 5, flexDirection: 'row' }}>
                    <Text style={styles.texttitle}>Email   </Text>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '800', marginLeft: 20 }}>: </Text>
                    <Text style={{ fontSize: 18 }}>{item.email}</Text>
                </View>
                <View style={{ marginTop: 5, flexDirection: 'row' }}>
                    <Text style={styles.texttitle}>Gender </Text>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '800', marginLeft: 10 }}>: </Text>
                    <Text style={{ fontSize: 18 }}>{item.gender}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={styles.texttitle}>Status</Text>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '800', marginLeft: 20 }}>: </Text>
                    <Text style={{ fontSize: 18 }}>{item.status}</Text>
                </View>
            </View>
        )
    }

    //render book details
    const rendertitlevalue = ({ item }) => {
        return (
            <View>
                <Text style={styles.texttitle}>Title:</Text>
                <Text style={styles.textbody}>{item.title}</Text>
                <Text style={styles.texttitle}>Body:</Text>
                <Text style={styles.textbody}>{item.body}</Text>
            </View>
        )
    }

    //intial render
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
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
                        <Text on onPress={viewmodal} style={styles.editText}>Edit</Text>
                        <Text onPress={toggleModal} style={styles.editText}>View</Text>
                    </View>)}
            </View>
            <FlatList data={listvalue}
                renderItem={renderlistvalue}>
            </FlatList>

            <FlatList data={titlevalue}
                renderItem={rendertitlevalue}>
            </FlatList>
            <Modal isVisible={nameEdittext} style={{ marginHorizontal: 0 }}>
                <FlatList data={listvalue}
                    renderItem={({ item }) => (
                        <View style={styles.mobileText}>
                            <TouchableOpacity onPress={viewmodal}>
                                <Icon name="close" size={20} style={styles.close}></Icon>
                            </TouchableOpacity>
                            <Text style={styles.AuthText}>Edit your Details </Text>
                            <View style={styles.viewText}>
                                <TextInput style={styles.inputText}
                                    placeholder="Enter your user Name"
                                    placeholderTextColor="gray"
                                    onChangeText={(text) => setName(text)}>{item.name}</TextInput>
                                <TextInput style={styles.inputText}
                                    placeholder="Enter your email"
                                    placeholderTextColor="gray"
                                    onChangeText={(text) => setEmail(text)}>{item.email}</TextInput>
                                <TextInput style={styles.inputText}
                                    placeholder="Gender"
                                    placeholderTextColor="gray"
                                    onChangeText={(text) => setGender(text)} >{item.gender}</TextInput>
                                <TextInput style={styles.inputText}
                                    placeholder="Status"
                                    placeholderTextColor="gray"
                                    onChangeText={(text) => setStatus(text)} >{item.status}</TextInput>
                                <TouchableOpacity style={styles.savebox} onPress={editExample}>
                                    <Text style={styles.saveText}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}>
                </FlatList>
            </Modal>
        </View >
    );
};
export default Authordetails;

const styles = StyleSheet.create({
    texttitle: {
        marginLeft: 20,
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
        marginLeft: 20,
        marginTop: 40
    },
    modalText: {
        height: 100,
        width: 100,
        backgroundColor: 'white',
        marginTop: 60,
        marginEnd: 20
    },
    deleteText: {
        position: 'absolute',
        right: 8,
        flexDirection: 'column',
        marginTop: 30,
    },
    editText: {
        fontSize: 18,
        color: 'black',
        marginHorizontal: 20,
        marginVertical: 5,
    },
    colone: {
        position: 'relative',
        color: 'black',
        fontSize: 20,
        fontWeight: '800',
        marginLeft: 60,
    },
    mobileText: {
        height: 450,
        width: width,
        backgroundColor: 'white',
        marginTop: 390,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    AuthText: {
        fontSize: 20,
        color: 'black',
        fontWeight: '800',

        alignSelf: 'center'
    },
    viewText: {
        alignItems: 'center',
        marginTop: 20

    },
    close: {
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 10
    },
    inputText: {
        height: 50,
        width: 350,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginVertical: 10,
        paddingStart: 10,
        fontSize: 18
    },
    savebox: {
        height: 50,
        width: 350,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: '#6FBBDB',
        alignItems: 'center',
        justifyContent: 'center'
    },
    saveText: {
        fontSize: 20,
        fontWeight: '600'
    }
})