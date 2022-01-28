import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Header as HeaderRNE, Card } from 'react-native-elements';
import api from '../helper/axiosHelper';
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
import categorias from '../data/categorias' 


export default function UserLogadoScreen ({ route, navigation }) {
    let [service, setService] = React.useState("");
    // let [placeToRender, setPlace] = useState([]);
    const [dados, setDados] = useState([]);
    const [logged, setLogged] = useState();

    function resgatarDados() {
        api.get('lugares')
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
                        <Avatar size="sm" onPress={() => setShowModal(true)}
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
                        api.get(`lugares/p/${text}`)
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

            <View style={{flex:1}}>
                <Box style={styles.buttonAddLugar}>   
                    <Button onPress={() => navigation.navigate('cadastroLugar')}  style={{backgroundColor: '#EA4335'}} _text={{ color: 'white' }}>Adicionar lugar</Button>
                </Box>
            </View>


        </NativeBaseProvider >
    );
}

const styles = StyleSheet.create({
    buttonAddLugar: {
        position:'absolute',
        bottom:15,
        right:15,
        alignSelf:'flex-end',
        borderRadius: '5px',
    },
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
