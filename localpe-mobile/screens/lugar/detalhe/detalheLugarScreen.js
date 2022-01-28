import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Header as HeaderRNE, Icon } from "react-native-elements";
import styles from './detalheLugarScreen.style';
import api from "../../../helper/axiosHelper";
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
} from "native-base";

export default function DetalheLugarScreen ({ route, navigation }) {
  const [index, setIndex] = React.useState(0);
  const [dados, setDados] = useState([]);
  let [botao, setbotao] = React.useState("");
  const [getNome, setNome] = useState();
  const [getId, setId] = useState();
  const [getImagem, setImagem] = useState();
  const [getDetalhe, setDetalhe] = useState();
  const [getComentario, setComentario] = useState();
  const [getCategoria, setCategoria] = useState();
  const [modalVisible, setModalVisible] = React.useState(false);
  //     const [getAlterar,setAlterar] = useState();

  useEffect(() => {
    if (route.params) {
      const { nome } = route.params;
      const { imagem } = route.params;
      const { detalhe } = route.params;
      const { id } = route.params;
      const { categoria } = route.params;

      setId(id);
      setCategoria(categoria);
      setNome(nome);
      setImagem(imagem);
      setDetalhe(detalhe);
      setCategoria(categoria);
    }
  }, []);

  function resgatarDados() {
    api.get(`comentario/${getId}`)
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
    api.post(`comentario/${idLugar}`,
        {},
        {
          headers: {
            comentario: comentario,
            usuarioId: "beta633",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        resgatarDados();
        setComentario("");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <NativeBaseProvider>
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
              onPress={() => navigation.navigate("login")}
            >
              <Text style={styles.textoBotaoLogin}>Log In</Text>
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

      <TouchableOpacity
        onPress={() => navigation.navigate("inicio")}
        style={{
          marginTop: "13vh",
          position: "absolute",
          zIndex: "2000",
          borderWidth: 2,
          marginLeft: "20px",
          borderColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          width: 30,
          height: 30,
          backgroundColor: "rgb(231 231 231 / 0%)",
          borderRadius: 50,
        }}
      >
        <Icon name={"chevron-left"} size={30} color="#fff" />
      </TouchableOpacity>
      <Image
        style={styles.imagem}
        source={{ uri: getImagem }}
        containerStyle={styles.item}
        PlaceholderContent={<ActivityIndicator />}
      />

      <VStack>
        <HStack
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingHorizontal: "20px",
            paddingVertical: "10px",
          }}
        ></HStack>

        <View style={styles.boxInputs}>
          <Text style={styles.headingText}>Sobre o destino</Text>
          <Text style={styles.textoCard}>{getDetalhe}</Text>
          <Text style={styles.categoria}> {getCategoria}</Text>
        </View>

        <View style={styles.boxInputs}>
          <Text style={styles.headingText}>Comentários</Text>

          {dados.map((l, i) => (
            <View>
              <Text style={styles.textoAnonimo}>Anônimo</Text>
              <Text style={styles.textoCard}>{l.comentario}</Text>
            </View>
          ))}
          <Button
            style={styles.button}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            mt="2"
            colorScheme="indigo"
            _text={{ color: "white" }}
          >
            Comentar
          </Button>
        </View>
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>
              Deseja adicionar um comentário sobre o lugar?
            </Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Comentário</FormControl.Label>
                <Input
                  value={getComentario}
                  onChangeText={(getComentario) => setComentario(getComentario)}
                />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setModalVisible(false);
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  onPress={() => {
                    setModalVisible(false);
                    adicionarComentario(getComentario, getId);
                  }}
                >
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
