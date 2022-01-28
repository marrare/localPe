import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Header as HeaderRNE, Card } from 'react-native-elements';
import styles from './homeScreen.style';
import api from '../../helper/axiosHelper';
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
import categorias from '../../data/categorias' 

export default function HomeScreen ({ route, navigation }) {
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


    return (
        <NativeBaseProvider>
            {header}

            <Image
                style={styles.imagem}
                source={{
                    uri: "http://www.qualviagem.com.br/wp-content/uploads/2015/11/Olinda7_Marcio-Silva.jpg",
                }}
                containerStyle={styles.item}
                PlaceholderContent={<ActivityIndicator />}
            />
            <TextInput //Caixa de pesquisa
                style={styles.input}
                placeholder="Search..."
                onChangeText={(text) => {
                    if (text.trim().length >= 2) {
                        api.get(`lugares/p/${text}`)
                            .then(function (response) {
                                setDados(response.data);
                            })
                            .catch(function (error) {
                                console.log("erro ao buscar");
                            });
                    } else {
                        resgatarDados();
                    }
                }}
            />
            <View style={styles.select}></View>
            <Select
                selectedValue={service}
                accessibilityLabel="Choose Service"
                placeholder="Selecione a categoria"
                _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setService(itemValue)}
            >
                {categorias.map((categoria, i) => (
                    <Select.Item label={categoria.nome} value={categoria.nome} />
                ))}
            </Select>

            <VStack alignItems="center">
                <View style={styles.card}>
                    {placeToRender.map((l, i) => (
                        <Card>
                            <Card.Title>{l.nome}</Card.Title>
                            <Card.Divider />
                            <Card.Image
                                onPress={() =>
                                    navigation.navigate("detalharLugar", {
                                        nome: l.nome,
                                        detalhe: l.descricao,
                                        imagem: l.fotos.at(0),
                                        id: l.id,
                                        categoria: l.categoria,
                                    })
                                }
                                style={{ padding: 0 }}
                                source={{
                                    uri: l.fotos.at(0),
                                }}
                            />
                        </Card>
                    ))}
                </View>
            </VStack>
        </NativeBaseProvider>
    );
}
