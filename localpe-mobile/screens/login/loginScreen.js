import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Header as HeaderRNE, Icon } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./loginScreen.style";
import {
  Toast,
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
} from "native-base";

export default function LoginScreen({ route, navigation }) {
  let isLoggedIn = true;

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyAPj7LXDRsLCQroYXaG94Zsv2uzmGQeVq0",
    authDomain: "login-git.firebaseapp.com",
    projectId: "login-git",
    storageBucket: "login-git.appspot.com",
    messagingSenderId: "537556813832",
    appId: "1:537556813832:web:cfab0f91580145a01769bd",
    measurementId: "G-4Y0B0EKML8",
  };

  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  function loginGoogle() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigation.navigate("userLogado");

        Toast.show({
          title: "Olá, seja bem-vindo de volta",
          status: "info",
          placement: "top-right",
          description: "Que tal ver alguns lugares que você ainda não foi?",
        });
      })
      // ...
      .catch((error) => {
        Toast.show({
          title: "Usuário ou senha incorreto",
          status: "erro",
          placement: "top-right",
        });
        console.log("não conectado");
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  return (
    <NativeBaseProvider style={styles.container}>
      <Box safeArea flex={1}>
        <HeaderRNE
          backgroundColor="#EA4335"
          leftComponent={
            <View>
              <Text style={styles.titulo}>Local PE</Text>
            </View>
          }
          rightComponent={
            <View style={styles.headerRight}>
              <TouchableOpacity
                style={styles.botaoLogin}
                onPress={() => navigation.navigate("inicio")}
              >
                <Text style={styles.textoBotaoLogin}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.botaoCadastrar}
                onPress={() => navigation.navigate("cadastro")}
              >
                <Text style={styles.textoBotaoCadastrar}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          }
          //centerComponent={{ text: 'Header', style: styles.heading }}
        />
        <Text style={styles.loginText}>Fazer Login</Text>
        <View style={styles.boxInputs}>
          <Text style={styles.textoMenor}>Logar com</Text>
          <Button
            onPress={() => {
              loginGoogle();
            }}
            style={styles.googleButton}
            mt="2"
            colorScheme="indigo"
            _text={{ color: "#EA4335" }}
          >
            GOOGLE
          </Button>
          <Divider my="2" mb="2" />
          <VStack space={3}>
            <Input
              style={styles.inputLogin}
              value={email}
              onChangeText={(email) => setEmail(email)}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="E-mail"
            />
            <Input
              style={styles.inputLogin}
              value={senha}
              onChangeText={(senha) => setSenha(senha)}
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
              _text={{ fontSize: "12px", fontWeight: "500", color: "#799ED6" }}
              alignSelf="flex-end"
              mt="1"
            >
              Esqueceu a senha?
            </Link>
            <Button
              onPress={() => {
                loginFirebase();
              }}
              style={styles.button}
              mt="2"
              colorScheme="indigo"
              _text={{ color: "white" }}
            >
              Login
            </Button>
          </VStack>
        </View>
      </Box>
    </NativeBaseProvider>
  );
}
