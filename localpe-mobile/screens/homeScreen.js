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

export default function HomeScreen({ navigation }) {

  const [dados,setDados] = useState([]);

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

  },[])

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
            < Image style={styles.imagem}
                source={{ uri: 'http://www.qualviagem.com.br/wp-content/uploads/2015/11/Olinda7_Marcio-Silva.jpg' }}
                containerStyle={styles.item}
                PlaceholderContent={< ActivityIndicator />}
            />

            < TextInput
                style={styles.input}
                placeholder="Search..."
            />
            <VStack alignItems="center">
                <View style={styles.card}>
                    {
                    ListaLugares.map((l, i) => (
                    
                    <Card >
                        <Card.Title>{l.name}</Card.Title>
                        <Card.Divider />
                        <Card.Image onPress={()=>navigation.navigate('detalharLugar',{
                        nome:l.name,
                        detalhe:l.subtitle,
                        imagem:l.avatar_url ,
                       
                    })}
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


        </NativeBaseProvider >
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
