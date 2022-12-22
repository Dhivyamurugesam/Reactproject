import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView, SectionList } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome5";
import UserAvatar from 'react-native-user-avatar';
import DropShadow from "react-native-drop-shadow";

const AuthorScreen = ({ navigation }) => {
    const [listvalue, setListvalue] = useState([]);
    const [pop, setPop] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = (i, e) => {
        setModalVisible(!isModalVisible);
        setPop(i);
    };

    useEffect(() => {
        getapi();
        deleteExample();
    }, []);

    const getapi = () => {
        fetch(`https://gorest.co.in/public/v2/users`,
            {
                method: 'GET',
                headers: { "Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': 'Bearer b55dae3b7f03b68edcbcd7eb32ee00e3912361145f4d99e8dbccce7200ac4e1d', },
            }
        )
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson, "data===============>");
                responseJson.map((item) => {
                    fetch(`https://gorest.co.in/public/v2/posts?user_id=${item.id}`,
                        {
                            method: 'GET',
                            headers: { "Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': 'Bearer b55dae3b7f03b68edcbcd7eb32ee00e3912361145f4d99e8dbccce7200ac4e1d', },
                        })
                        .then(res => res.json())
                        .then(resJson => {
                            item.title = resJson[0].title;
                            item.body = resJson[0].body;
                            setListvalue(responseJson);
                            console.log(responseJson, "kkkkkk============>");
                        })
                })
            })
    };

    const deleteExample = async () => {
        try {
            await fetch(
                `https://gorest.co.in/public/v2/users/${pop}`, {
                method: 'DELETE',
                headers: { "Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': 'Bearer b55dae3b7f03b68edcbcd7eb32ee00e3912361145f4d99e8dbccce7200ac4e1d', },
                body: JSON.stringify()
            })
                .then(response => {
                    response.json()
                    getapi();
                    console.log(response.json(),)
                })
        }
        catch (error) {
            console.error(error);
        }
    }

    const selectid = (id, e) => {
        let Id = id;
        navigation.navigate('Authordetails', {
            Id,
        });
    }

    const firstname = (name, e) => {
        let lastname = name;
        lastname.includes(' .', [0])
    }

    //render values
    const rendervalues = ({ item, index }) => {
        return (
            <View style={{ flex: 1, marginVertical: 5, marginLeft: 10 }} key={index}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <DropShadow style={{ shadowColor: 'black', shadowRadius: 4, shadowOpacity: 1, shadowOffset: { width: 0, height: 0 } }}>
                            <UserAvatar style={{ marginTop: 5 }} size={48} name={item.name} />
                        </DropShadow>
                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity
                                onLongPress={() => toggleModal(item.id)}
                                onPress={() => selectid(item.id)} >
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.firstname}>{firstname.call = item.name.split(' ')[0]} </Text>
                                    <Text style={styles.lastname}>{item.name.split(' ')[1]} </Text>
                                </View>
                                <View style={styles.titletext}>
                                    <Text>Title :</Text>
                                    <Text numberOfLines={1} style={{ color: 'gray' }}>{item.title ? item.title : "Nil"}</Text>
                                </View>
                                <View style={styles.titletext}>
                                    <Text>Des  :</Text>
                                    <Text numberOfLines={1} style={{ color: 'gray' }}>{item.body ? item.body : "Nil"}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={{ position: 'absolute', right: 15 }} onLongPress={() => toggleModal(item.id)}
                        onPress={() => selectid(item.id)}>
                        <Icon style={styles.rightarrow} name="angle-right" size={22}></Icon>
                    </TouchableOpacity>
                </View>
                <View style={{ width: 300, borderWidth: 0.5, borderColor: '#C1BBBB', marginLeft: 70 }}></View>
            </View>
        )
    }

    //initial render
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={styles.authorText}>
                <Text style={styles.AuthText}>Author List</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CreateuserScreen')}>
                    <Image style={styles.addText} source={require('../../assets/images/plus.png')}></Image>
                </TouchableOpacity>
            </View>
            <FlatList data={listvalue}
                renderItem={rendervalues}>
            </FlatList >
            <Modal isVisible={isModalVisible}
                coverScreen={false}
                hasBackdrop={true}
                backdropOpacity={0.10}
                onBackdropPress={() => { setModalVisible(false) }}
                animationIn='zoomIn'
                animationOut='zoomOut'>
                <View style={styles.modalView}>
                    <TouchableOpacity>
                        <Text style={styles.editText}>Select</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.editText}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteExample}>
                        <Text style={styles.editText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
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
    },
    firstname: {
        fontSize: 18,
        fontWeight: '800',
        marginLeft: 20,
        marginBottom: 5
    },
    lastname: {
        fontSize: 18,
        fontWeight: '800',
        color: 'blue'
    },
    rightarrow: {
        marginTop: 11,
    },
    modalView: {
        height: 100,
        width: 100,
        borderRadius: 10,
        backgroundColor: 'white',
        position: 'absolute',
        top: 150,
        right: 50
    },
    editText: {
        fontSize: 18,
        color: 'black',
        marginHorizontal: 20,
        marginVertical: 5
    },
    titletext: {
        flexDirection: 'row',
        width: 200,
        marginHorizontal: 20,
        marginBottom: 5
    }
})