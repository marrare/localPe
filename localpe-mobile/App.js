import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from './screens/cadastro';
import HomeScreen from './screens/homeScreen';
import Login from './screens/login';
import UserLogado from './screens/userLogado';
import DetalharLugar from './screens/detalharLugar';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicio">
        <Stack.Screen name="detalharLugar" component={DetalharLugar} options={{ headerShown: false }} />
        <Stack.Screen name="userLogado" component={UserLogado} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="inicio" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="cadastro" component={Cadastro} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
