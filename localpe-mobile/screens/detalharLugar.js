import { Tab, TabView } from 'react-native-elements';
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
    Avatar,
    Modal,
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

export default function DetalharLugar({ route, navigation }) {
    const [index, setIndex] = React.useState(0);
    const [dados, setDados] = useState([]);
    let [botao, setbotao] = React.useState("");
    const [getNome, setNome] = useState();
    const [getId, setId] = useState();
    const [getImagem, setImagem] = useState();
    const [getDetalhe, setDetalhe] = useState();
    const [getComentario, setComentario] = useState();
    const [modalVisible, setModalVisible] = React.useState(false);
    //     const [getAlterar,setAlterar] = useState();



    useEffect(() => {
        if (route.params) {
            const { nome } = route.params
            const { imagem } = route.params
            const { detalhe } = route.params
            const { id } = route.params


            setId(id)

            setNome(nome)
            setImagem(imagem)
            setDetalhe(detalhe)

        }






    }, []);


    function resgatarDados() {
        axios('http://52.71.103.14:8080/comentario/' + getId)
            .then(function (response) {
                setDados(response.data);
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    resgatarDados();
    console.log(getComentario);
    function adicionarComentario(comentario, idLugar) {

        axios.post('http://52.71.103.14:8080/comentario/' + idLugar, {}, {
            headers: {

                comentario: comentario,
                usuarioId: "beta633"

            }
        })
            .then(function (response) {
                console.log(response);
                resgatarDados();
                setComentario("")

            })
            .catch(function (error) {

                console.log(error);
            });
    }



    // let placeToRender;
    // if (service == "") {
    //     placeToRender = dados;
    // } else {
    //     placeToRender = dados.filter(function (lugar) {
    //         return lugar.categoria == service;
    //     });
    // }








    return (

        <NativeBaseProvider>
            <HeaderRNE backgroundColor='#EA4335'
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

            <TouchableOpacity onPress={() => navigation.navigate('inicio')}
                style={{
                    marginTop: '13vh',
                    position: "absolute",
                    zIndex: "2000",
                    borderWidth: 2,
                    marginLeft: "20px",
                    borderColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 30,
                    height: 30,
                    backgroundColor: 'rgb(231 231 231 / 0%)',
                    borderRadius: 50,
                }}
            >
                <Icon name={"chevron-left"} size={30} color="#fff" />
            </TouchableOpacity>
            <Image style={styles.imagem}
                source={{ uri: getImagem }}
                containerStyle={styles.item}
                PlaceholderContent={<ActivityIndicator />}
            />


            <VStack>






                <HStack style={{ display: "flex", justifyContent: "space-between", paddingHorizontal: "20px", paddingVertical: "10px" }}>
                    {/* <Button style={styles.button} mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
                        Sobre o destino
                    </Button> */}

                </HStack>

                <View style={styles.boxInputs}>
                    <Text style={styles.headingText}>Sobre o destino</Text>
                    <Text style={styles.textoCard}>{getDetalhe}</Text>
                    <Text style={styles.categoria}> {getCategoria}</Text>
                </View>

                <View style={styles.boxInputs}>
                    <Text style={styles.headingText}>Comentários</Text>

                    {
                        dados.map((l, i) => (
                            <View>
                                <Text style={styles.textoAnonimo}>Anônimo</Text>
                                <Text style={styles.textoCard}>{l.comentario}</Text>
                            </View>

                        ))}
                    <Button style={styles.button} onPress={() => {
                        setModalVisible(!modalVisible);
                    }} mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
                        Comentar
                    </Button>
                </View>
                <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
                    <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>Deseja adicionar um comentário sobre o lugar?</Modal.Header>
                        <Modal.Body>
                            <FormControl>
                                <FormControl.Label>Comentário</FormControl.Label>
                                <Input value={getComentario}
                                    onChangeText={getComentario => setComentario(getComentario)} />
                            </FormControl>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                    setModalVisible(false);
                                }}>
                                    Cancelar
                                </Button>
                                <Button onPress={() => {
                                    setModalVisible(false);
                                    adicionarComentario(getComentario, getId)
                                }}>
                                    Salvar
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>


            </VStack>


        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "50%",
        borderRadius: 4,
        backgroundColor: '#EA4335',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
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
    botaoComentario: {
        width: "50%",
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'fff',
        shadowColor: '#32325d26',
        shadowOffset: {
            width: 5,
            height: 8
        },
        shadowOpacity: 1.50,
        shadowRadius: 16.00,
        elevation: 10
    },
    headingText: {

        fontSize: '1.2rem',
        marginBottom: "8PX",
        fontWeight: '700',
        color: '#EA4335',
        alignSelf: 'left',

    },
    tab: {
        backgroundColor: "#EA4335",
        display: "flex",
        paddingLeft: "0",
        marginBottom: "0",
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
        height: '28%'
    },
    textoCard: {
        color: "#525f7f",
        fontSize: ".875rem"
    },
    textoAnonimo: {
        color: "#EA4335",
        fontSize: "1rem"
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
    boxInputs: {
        marginTop: '20px',
        borderRadius: '8px',
        marginHorizontal: '20px',
        padding: '20px',
        backgroundColor: 'fff',
        shadowColor: '#32325d26',
        shadowOffset: {
            width: 5,
            height: 8
        },
        shadowOpacity: 1.50,
        shadowRadius: 16.00,
        elevation: 10

    },
    card: {
        marginTop: '10px',
        padding: '15px',
        width: '100%',

    },
    categoria: {
        marginTop: 20,
        justifyContent: "flex-end",
        alignItems: "baseline",
        color: "#EA4335"
    }
});
