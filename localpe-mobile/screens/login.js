import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { Linking, StyleProp, TextStyle, ViewStyle, } from 'react-native';
import { FlatList, ActivityIndicator } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon, SafeAreaView, Card } from 'react-native-elements';
// import {  } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons"
import {
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



export default function Login({ navigation }) {

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
                            <TouchableOpacity style={styles.botaoCadastrar} onPress={() => navigation.navigate('cadastro')}>
                                <Text style={styles.textoBotaoCadastrar}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    }
                //centerComponent={{ text: 'Header', style: styles.heading }}
                />
                <Text style={styles.loginText}>Fazer Login</Text>
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
                        <Button onPress={() => navigation.navigate('userLogado')} style={styles.button} mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
                            Login
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