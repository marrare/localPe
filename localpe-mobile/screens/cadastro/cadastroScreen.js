import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Header as HeaderRNE, Icon } from 'react-native-elements';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { MaterialIcons } from "@expo/vector-icons"
import styles from './cadastroScreen.style';
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
    Divider
} from 'native-base';

export default function CadastroScreen ({ navigation }) {

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