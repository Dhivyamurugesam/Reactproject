
import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableOpacity, StyleSheet, Dimensions, RecyclerViewBackedScrollView } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome5";
import Avatar from 'react-avatar';

const { height, width } = Dimensions.get('window');
const AuthorScreen = ({ navigation }) => {
    const [listvalue, setListvalue] = useState([]);
    const [pop, setPop] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);


    const toggleModal = (i,e) => {
        console.log("piop",i)

        setModalVisible(!isModalVisible); 
        setPop(i);
    };

console.log(pop,"new")


    useEffect(() => {
        getapi();
    }, []);
    // const requestOptions = {
    //     method: 'GET',
    //     headers: { "Accept":"application/json",'Content-Type': 'application/json','Authorization': 'Bearer 29b6c0666271758735bb5f8835ad9bfd8d05ee1975f53fbf43f292d5f87b394e',},
    // };
    const getapi = () => {
        fetch(`https://gorest.co.in/public/v2/users`, {
            method: 'GET',
            headers: { "Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': 'Bearer 6cde897f09fb485e6dab9c491f27f619d03c35b7ffca8708e69c46861eb5b5c6', },
        }
        )
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson,"hiiiiiii");
                setListvalue(responseJson);
            })
            .catch(error => console.log(error));
    }
    const requestOptions = {
        method: 'DELETE',
        headers: { "Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': 'Bearer 6cde897f09fb485e6dab9c491f27f619d03c35b7ffca8708e69c46861eb5b5c6', },
        body: JSON.stringify()
    };
    const deleteExample = async () => {
        console.log(pop,"45445")
        try {
            await fetch(
                `https://gorest.co.in/public/v2/users/${pop}`, requestOptions)
                .then(response => {
                    response.json()
                    getapi();
                    console.log(response.json(),"hfgfjksgdfjksg")
                })
        }
        catch (error) {
            console.error(error);
        }
    }
    const selectid=(id,e)=>{
        let Id = id;
        console.log('id>>>>>>>>>>>>>>>>>>>>', id);
        navigation.navigate('Authordetails', {
            Id,
        });
    }
    // console.log('list---->', listvalue);

    // const deleteapis = () => {
    //     console.log("delete")
    //     //  alert(item.id)
    //     // var body={id:item.id}
    //      console.log(dataid, "5655555");
    //     fetch(
    //         `https://gorest.co.in/public/v2/users/${dataid}`,
    //         {
    //             method: 'DELETE',
    //             headers: { "Accept":"application/json",'Content-Type': 'application/json','Authorization': 'Bearer 29b6c0666271758735bb5f8835ad9bfd8d05ee1975f53fbf43f292d5f87b394e',},
    //         },
    //     )
    //         .then(response => response.json())

    //         .catch(error => console.log(error));

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
                renderItem={({ item, index }) => (
                    console.log(item.id,"jghdjfghdg"),
                    <View style={{ flex: 1, marginVertical: 10 }} key={index}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row' }}>
                                {/* {listvalue?.map((element,index)=>{
                                return(
                                    <Avatar key={index} name={item.name} maxInitials={2}></Avatar>
                                )
                            })} */}

                                <Image style={{ height: 50, width: 50, borderRadius: 50, marginLeft: 20 }} source={require('../../assets/images/author.png')}></Image>
                                <TouchableOpacity 
                                    onLongPress={()=>toggleModal(item.id)}
                                    onPress={() => selectid(item.id)}
                                       >
                                    <Text style={styles.listText}>{item.name}</Text>

                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{ position: 'absolute', right: 15 }} onPress={() => navigation.navigate('Authordetails')}>
                                <Icon style={styles.rightarrow} name="angle-right" size={22}></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 1, width: 280, borderWidth: 1, borderColor: '#C1BBBB', marginLeft: 70 }}></View>
                    </View>
    )}>
            </FlatList>

            <Modal isVisible={isModalVisible}
                coverScreen={false}
                hasBackdrop={true}

                backdropOpacity={0.10}
                onBackdropPress={() => { setModalVisible(false) }}

                animationIn='zoomIn'
                animationOut='zoomOut'
            >

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
        // justifyContent: 'space-between'
    },

    listText: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: '800',
        marginLeft: 10

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

})