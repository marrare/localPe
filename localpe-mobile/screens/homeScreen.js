import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { Linking, StyleProp, TextStyle, ViewStyle, } from 'react-native';
import { FlatList, ActivityIndicator } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon, SafeAreaView, Card } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import axios from 'axios';
import ListaLugares from '../data/lugares.js'
import {
    Select,
    CheckIcon,
    Avatar,
    Button,
    Image,
    NativeBaseProvider,
    Box,
    Text,
    Input,
    Heading,
    VStack,
    FormControl,
    Link,
    IconButton,
    HStack,
    Divider,
} from 'native-base';
import list from '../data/lugares.js';

export default function HomeScreen({ route, navigation }) {
    let [service, setService] = React.useState("");
    // let [placeToRender, setPlace] = useState([]);
    const [dados, setDados] = useState([]);
    const [logged, setLogged] = useState();

    function resgatarDados() {
        axios('http://52.71.103.14:8080/lugares')
            .then(function (response) {
                setDados(response.data);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {


        resgatarDados()

    }, [])


    let placeToRender;
    if (service == "") {
        placeToRender = dados;
    } else {
        placeToRender = dados.filter(function (lugar) {
            return lugar.categoria == service;
        });
    }
    console.log(dados);
    console.log(placeToRender);



    let header;
    if (logged) {
        header = <HeaderRNE backgroundColor='#EA4335'
            leftComponent={
                <View>
                    <Text style={styles.titulo} onPress={() => navigation.navigate('inicio')}>Local PE</Text>
                </View>
            }
            rightComponent={
                <View style={styles.headerRight}>
                    <Avatar
                        bg="light.700"
                        source={{
                            uri: "https://alpha.nativebase.io/img/native-base-icon.png",
                        }}
                    >
                        RC
                        <Avatar.Badge bg="green.500" />
                    </Avatar>
                </View>
            }
        //centerComponent={{ text: 'Header', style: styles.heading }}
        />;
    } else {
        header = <HeaderRNE backgroundColor='#EA4335'
            leftComponent={
                <View>
                    <Text style={styles.titulo}>Local PE</Text>
                </View>
            }
            rightComponent={
                <View style={styles.headerRight}>
                    <TouchableOpacity style={styles.botaoLogin} onPress={() => navigation.navigate('login')}>
                        <Text style={styles.textoBotaoLogin}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoCadastrar} onPress={() => navigation.navigate('cadastro')}>
                        <Text style={styles.textoBotaoCadastrar}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            }
        //centerComponent={{ text: 'Header', style: styles.heading }}
        />
    }

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
        {
            id: 6,
            nome:"Atrações"
        },
        {
            id:7,
            nome:""
        }

    ]


    return (

        <NativeBaseProvider>

            {header}

            < Image style={styles.imagem}
                source={{ uri: 'http://www.qualviagem.com.br/wp-content/uploads/2015/11/Olinda7_Marcio-Silva.jpg' }}
                containerStyle={styles.item}
                PlaceholderContent={< ActivityIndicator />}
            />
            < TextInput //Caixa de pesquisa
                style={styles.input}
                placeholder="Search..."
                onChangeText={text => {
                    if (text.trim().length >= 2) {
                        axios('http://52.71.103.14:8080/lugares/p/'.concat(text))
                            .then(function (response) {
                                setDados(response.data);
                            })
                            .catch(function (error) {
                                console.log("erro ao buscar")
                            });
                    } else {

                        resgatarDados()
                    }
                }}
            />
            <View style={styles.select}>

            </View>
            <Select selectedValue={service} accessibilityLabel="Choose Service" placeholder="Selecione a categoria" _selectedItem={{
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

                            <Card >
                                <Card.Title>{l.nome}</Card.Title>
                                <Card.Divider />
                                <Card.Image onPress={() => navigation.navigate('detalharLugar', {
                                    nome: l.nome,
                                    detalhe: l.descricao,
                                    imagem: l.fotos.at(0),
                                    id: l.id,
                                    categoria: l.categoria


                                })}
                                    style={{ padding: 0 }}
                                    source={{
                                        uri:
                                            l.fotos.at(0),
                                    }}
                                />
                            </Card>
                        ))
                    }
                </View>
            </VStack>


        </NativeBaseProvider >
    );
}

const styles = StyleSheet.create({
    select: {

        marginTop: "20px"


    },
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
        backgroundColor: '#EA4335',
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
        bottom: "20px",
        top: 170,
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
