import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { Linking, StyleProp, TextStyle, ViewStyle, } from 'react-native';
import { FlatList, ActivityIndicator } from 'react-native';
import { Header as HeaderRNE, HeaderProps, SafeAreaView, Card } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import axios from 'axios';
import ListaLugares from '../data/lugares.js'
import {
    Select,
    CheckIcon,
    Avatar,
    Icon,
    Button,
    Image,
    NativeBaseProvider,
    Box,
    Text,
    Modal,
    Input,
    Heading,
    VStack,
    FormControl,
    Link,
    IconButton,
    HStack,
    Divider,
} from 'native-base';

export default function UserLogado({ route, navigation }) {
    const [showModal, setShowModal] = useState(false);
    let [service, setService] = React.useState("");
    // let [placeToRender, setPlace] = useState([]);
    // const [dados, setDados] = useState([]);
    const [logged, setLogged] = useState();
    useEffect(() => {
        if (route.params) {
            const { isLoggedIn } = route.params
            setLogged(isLoggedIn)


        }
    })

    let placeToRender;
    if (service == "") {
        placeToRender = ListaLugares;
    } else {
        placeToRender = ListaLugares.filter(function (lugar) {
            return lugar.category == service;
        });
    }

    console.log(placeToRender);






    const lugares = [

    ]
    const categorias = [
        {
            id: 1,
            nome: "Praça"
        },
        {
            id: 2,
            nome: "Monumento Histórico"
        },
        {
            id: 3,
            nome: "Cachoeira"
        },
        {
            id: 4,
            nome: "Parque"
        },
        {
            id: 5,
            nome: "Igreja"
        },

    ]


    useEffect(() => {

        function resgatarDados() {
            axios('http://localhost:19006/listarLugares')
                .then(function (response) {
                    setDados(response.data);
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        resgatarDados()

    }, [])


    return (

        <NativeBaseProvider>
            <HeaderRNE backgroundColor='#EA4335'
                leftComponent={
                    <View>
                        <Text style={styles.titulo} onPress={() => navigation.navigate('inicio')}>Local PE</Text>
                    </View>
                }
                rightComponent={
                    <View style={styles.headerRight} >
                        <Avatar onPress={() => setShowModal(true)}
                            bg="light.200"
                            source={{
                                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
                            }}
                        >

                            <Avatar.Badge bg="green.500" />
                        </Avatar>
                    </View>
                }
            //centerComponent={{ text: 'Header', style: styles.heading }}
            />
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header>Contact Us</Modal.Header>
                    <Modal.Body>
                        <FormControl>
                            <FormControl.Label>Name</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl mt="3">
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                        </FormControl>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                setShowModal(false);
                            }}>
                                Cancel
                            </Button>
                            <Button onPress={() => {
                                setShowModal(false);
                            }}>
                                Save
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
            <Image style={styles.imagem}
                source={{ uri: 'http://www.qualviagem.com.br/wp-content/uploads/2015/11/Olinda7_Marcio-Silva.jpg' }}
                containerStyle={styles.item}
                PlaceholderContent={<ActivityIndicator />}
            />

            <Select style={styles.select} selectedValue={service} accessibilityLabel="Choose Service" placeholder="Selecione a categoria" _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                {
                    categorias.map((categoria, i) => (
                        <Select.Item label={categoria.nome} value={categoria.nome} />
                    ))}

            </Select>
            <VStack alignItems="center">
                <View style={styles.card}>
                    {
                        placeToRender.map((l, i) => (

                            <Card>
                                <Card.Title>{l.name}</Card.Title>
                                <Card.Divider />
                                <Card.Image
                                    style={{ padding: 0 }}
                                    source={{
                                        uri:
                                            l.avatar_url,
                                    }}
                                />
                            </Card>
                        ))
                    }
                </View>
            </VStack>


        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        marginTop: 5,
        width: 90,
        color: 'white',
        fontSize: 22,
        fontFamily: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
    },
    textoBotaoLogin: {
        color: 'black',

    },
    botaoLogin: {
        marginRight: 5,
        borderRadius: 2,
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7'
    },
    textoBotaoCadastrar: {
        color: 'white',
        borderColor: '#fff'
    },
    botaoCadastrar: {
        marginRight: 5,
        borderRadius: 2,
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c41414',
        borderBottomColor: '#fff'
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    list: {
        width: '100%',
        backgroundColor: '#000',
    },
    item: {
        aspectRatio: 1,
        width: '100%',
        height: '50%',
        flex: 1,
    },
    imagem: {
        height: '25%'
    },
    input: {
        backgroundColor: '#fff',
        width: '60%',
        height: 30,
        alignSelf: 'center',
        paddingLeft: 10,
        borderRadius: '2%',
        position: 'absolute',

        top: 220,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 10
    },
    card: {
        marginTop: '10px',
        padding: '15px',
        width: '100%',

    }
});