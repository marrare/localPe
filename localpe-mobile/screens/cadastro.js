import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, TextInput, Touchable, TouchableOpacity } from 'react-native';
//import { Linking, StyleProp, TextStyle, ViewStyle, } from 'react-native';
//import { FlatList, ActivityIndicator } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon, SafeAreaView, Card } from 'react-native-elements';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { MaterialIcons } from "@expo/vector-icons"
import {
    Toast,
    useToast,
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
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Cadastro({ navigation }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const firebaseConfig = {
        apiKey: "AIzaSyCDGOU1OYD2Y6B2XTM3Qi6u2EYfqzHixHI",
        authDomain: "localpe-1dc7a.firebaseapp.com",
        projectId: "localpe-1dc7a",
        storageBucket: "localpe-1dc7a.appspot.com",
        messagingSenderId: "1006900573391",
        appId: "1:1006900573391:web:d441b9489baf727b67b3ba"
    };
    const toast = useToast();
    function cadastrarUsuarioFirebase() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate("login");
                Toast.show({
                    title: "Conta criada com sucesso!",
                    status: "success",
                    placement: "top-right",
                    description: "Seja bem-vindo ao LocalPE."
                });

                console.log("Usuário criado com sucesso")
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Toast.show({
                    title: "Falha ao criar usuário",
                    status: "error",
                    placement: "top-right",
                    description: errorMessage
                })

                console.log("Falha ao criar usuário")
                console.log(errorMessage)
                // ..
            });
    }

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);



    return (

        <NativeBaseProvider style={styles.container}>
            <Box safeArea flex={1} >
                <HeaderRNE backgroundColor='#EA4335'
                    leftComponent={
                        <View>
                            <Text style={styles.titulo}>Local PE</Text>
                        </View>
                    }
                    rightComponent={
                        <View style={styles.headerRight}>
                            <TouchableOpacity style={styles.botaoLogin} onPress={() => navigation.navigate('inicio')}>
                                <Text style={styles.textoBotaoLogin}>Home</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botaoCadastrar} onPress={() => navigation.navigate('login')}>
                                <Text style={styles.textoBotaoCadastrar}>Log in</Text>
                            </TouchableOpacity>
                        </View>
                    }
                //centerComponent={{ text: 'Header', style: styles.heading }}
                />
                <Text style={styles.loginText}>Cadastrar</Text>
                <View style={styles.boxInputs}>
                    <Text style={styles.textoMenor}>Logar com</Text>
                    <Button style={styles.googleButton} mt="2" colorScheme="indigo" _text={{ color: '#EA4335' }}>
                        GOOGLE
                    </Button>
                    <Divider my="2" mb="2" />
                    <VStack space={3}>
                        



                        <Input style={styles.inputLogin}

                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons name="person" />}
                                    size={5}
                                    ml="2"
                                    color="muted.400"
                                />
                            }
                            placeholder="Usuário"
                        />
                        <Input style={styles.inputLogin}
                            value={email}
                            onChangeText={email => setEmail(email)}

                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons name="mail" />}
                                    size={5}
                                    ml="2"
                                    color="muted.400"
                                />
                            }
                            placeholder="E-mail"
                        />
                        <Input style={styles.inputLogin}
                            value={senha}
                            onChangeText={senha => setSenha(senha)}

                            type="password"
                            InputRightElement={
                                <Icon
                                    as={<MaterialIcons name="visibility-off" />}
                                    size={5}
                                    mr="2"
                                    color="muted.400"
                                />
                            }
                            placeholder="Senha"
                        />



                        <Link
                            _text={{ fontSize: '12px', fontWeight: '500', color: '#799ED6' }}
                            alignSelf="flex-end"
                            mt="1">
                            Esqueceu a senha?
                        </Link>
                        <Button onPress={() => { cadastrarUsuarioFirebase() }} style={styles.button} mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
                            Criar conta
                        </Button>

                    </VStack>
                </View>

            </Box>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    textoMenor: {
        marginBottom: '2px',
        fontSize: '12px',
        fontWeight: '500',
        color: '#8898AA',
        alignSelf: 'center'
    },
    googleButton: {
        width: '40%',
        padding: '15px',
        backgroundColor: 'fff',
        shadowColor: '#32325d26',
        shadowOffset: {
            width: 5,
            height: 8
        },
        shadowOpacity: 1.50,
        shadowRadius: 16.00,
        elevation: 10,
        height: '35px',
        fontSize: '20px',
        marginTop: '5px',
        marginBottom: '20px',
        borderRadius: '5px',
        alignSelf: 'center'
    },
    loginText: {
        marginTop: '10px',
        fontSize: '36px',
        fontWeight: '600',
        color: '#EA4335',
        alignSelf: 'center'
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
    button: {
        width: '40%',
        padding: '15px',
        backgroundColor: '#EA4335',
        height: '35px',
        fontSize: '20px',
        marginTop: '20px',
        borderRadius: '5px',
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#f4f5f7',
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
        color: '#000',

    },
    botaoLogin: {
        marginRight: 5,
        borderRadius: 2,
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
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
    inputLogin: {
        outline: '0',
        width: '100%'

    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        height: 30,
        paddingLeft: 10,
        borderRadius: '2%',
        left: 83,
        top: 210,
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
        position: 'absolute',
        left: 6,
        top: 260,
        width: 400
    }
});