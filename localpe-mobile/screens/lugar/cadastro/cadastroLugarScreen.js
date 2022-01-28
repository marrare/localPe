import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Header as HeaderRNE, Icon } from "react-native-elements";
import styles from "./cadastroLugarScreen.style";
import api from "../../../helper/axiosHelper";
import {
  Avatar,
  Modal,
  Button,
  Toast,
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
  TextArea,
  Select,
  CheckIcon,
} from "native-base";
import categorias from "../../../data/categorias";

export default function CadastroLugarScreen({ route, navigation }) {
  const [descricao, setDescricao] = useState("");
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fotos, setFotos] = useState("");

  useEffect(() => {
    if (route.params) {
      // const { nome } = route.params;
      // const { imagem } = route.params;
      // const { detalhe } = route.params;
      // const { id } = route.params;
      // const { categoria } = route.params;
      // setId(id);
      // setCategoria(categoria);
      // setNome(nome);
      // setImagem(imagem);
      // setDetalhe(detalhe);
      // setCategoria(categoria);
    }
  }, []);

  function cadastrarLugar() {
    api.post(`lugar`,{}, {
      headers: {
        nome: nome,
        descricao: descricao,
        categoria: categoria,
        foto: fotos
      }
    }).then((response) => {
      navigation.navigate("userLogado")
      Toast.show({
        title: "Lugar adicionado com sucesso",
        status: "success",
        placement: "top-right"
      });
    }).catch(err => {
      Toast.show({
        title: "Não foi possível adicionar lugar",
        status: "error",
        placement: "top-right",
        description: "Tente novamente mais tarde"
      });
    })
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
              onPress={() => navigation.navigate("userLogado")}
            >
              <Text style={styles.textoBotaoLogin}>Home</Text>
            </TouchableOpacity>
          </View>
        }
      />

      <VStack>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Input
            w="75%"
            mt={10}
            placeholder="nome"
            value={nome}
            onChangeText={name => setNome(name)}
            // onChangeText={senha => setSenha(senha)}
            // value={ this.state.nome }
          />
          <TextArea 
            w="75%" 
            mt={2}
            placeholder="Detalhes" 
            value={descricao}
            onChangeText={det => setDescricao(det)}
          />
          {/* value={ this.state.descricao } */}

          <Select
            selectedValue={categoria}
            accessibilityLabel="Choose Category"
            placeholder="Selecione a categoria"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={2} onValueChange={itemValue => setCategoria(itemValue)}
          >
            {categorias.map((cat, i) => (
              <Select.Item label={cat.nome} value={cat.nome} />
            ))}
          </Select>

          <input onChange={upload} type = 'file' multiple/>

          <Button
            onPress={() => {
              cadastrarLugar();
            }}
            style={styles.button}
            mt="2"
            colorScheme="indigo"
            _text={{ color: "white" }}
          >
            Confirmar
          </Button>
        </View>
      </VStack>
    </NativeBaseProvider>
  );
}
