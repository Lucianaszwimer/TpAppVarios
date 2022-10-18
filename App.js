import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Home } from "./components/screens/home/home"
import { Contactos } from "./components/screens/contactos"
import { HoraTemperatura } from "./components/screens/horaTemperatura"
import { IdentificacionApp } from "./components/screens/identificacionApp"
import { NumEmergencias } from "./components/screens/numEmergencias"
import { MensajeUsuario } from "./components/screens/mensajeUsuario"

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <Home />
  );
}

function ContactosScreen() {
  return (
    <Contactos />
  );
}

function HoraTemperaturaScreen() {
  return (
    <HoraTemperatura />
  );
}

function IdentificacionAppScreen() {
  return (
    <IdentificacionApp />
  );
}

function NumEmergenciasScreen() {
  return (
    <NumEmergencias />
  );
}

function MensajeUsuarioScreen() {
  return (
    <MensajeUsuario />
  );
}

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Contactos" component={ContactosScreen} />
            <Stack.Screen name="HoraTemperatura" component={HoraTemperaturaScreen} />
            <Stack.Screen name="IdentificacionApp" component={IdentificacionAppScreen} />
            <Stack.Screen name="NumEmergencias" component={NumEmergenciasScreen} />
            <Stack.Screen name="MensajeUsuario" component={MensajeUsuarioScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
