import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Home } from "./components/screens/home/home"
import { Contactos } from "./components/screens/contactos"
import { HoraTemperatura } from "./components/screens/horaTemperatura"
import { IdentificacionApp } from "./components/screens/identificacionApp"
import { LlamadoEmerg } from "./components/screens/llamadoEmerg"
import { NumEmergencias } from "./components/screens/numEmergencias"

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

function LlamadoEmergScreen() {
  return (
    <LlamadoEmerg />
  );
}

function NumEmergenciasScreen() {
  return (
    <NumEmergencias />
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
            <Stack.Screen name="LlamadoEmerg" component={LlamadoEmergScreen} />
            <Stack.Screen name="NumEmergencias" component={NumEmergenciasScreen} />
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