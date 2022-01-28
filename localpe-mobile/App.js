import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CadastroScreen from './screens/cadastro/cadastroScreen';
import HomeScreen from './screens/home/homeScreen';
import LoginScreen from './screens/login/loginScreen';
import UserLogadoScreen from './screens/userLogadoScreen';
import DetalheLugarScreen from './screens/lugar/detalhe/detalheLugarScreen';
import CadastroLugarScreen from './screens/lugar/cadastro/cadastroLugarScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="cadastroLugar">
        <Stack.Screen name="detalharLugar" component={DetalheLugarScreen} options={{ headerShown: false }} />
        <Stack.Screen name="userLogado" component={UserLogadoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="inicio" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="cadastro" component={CadastroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="cadastroLugar" component={CadastroLugarScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
