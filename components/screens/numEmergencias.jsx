import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import * as Contacts from 'expo-contacts';
import { mensajeUSuario } from './mensajeUsuario';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function NumEmergencias() {
    const navigation = useNavigation();
    const [contactosBuscados, setContactosBuscados] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [hasPermission, setHasPermission] = useState(null);
    const [found, setFound] = useState(undefined);
    const [contactoStorage, setContactoStorage] = useState(undefined);

    //Funcion de pedir permiso para contactos
    const askForContactsPermission = () => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            setHasPermission(status)
        })()
    }
    // llamando a la funcion de arriba
    useEffect(() => {
        askForContactsPermission();
    }, []);

    useEffect(() => {
        lookingForContacts();
    }, [busqueda]);

    if (hasPermission === null) {
        return (
            <View>
                <Text>Pidiendo permiso para recurrir a los contactos</Text>
            </View>
        )
    }

    if (hasPermission !== 'granted') {
        mensajeUSuario("Se rechazo el permiso para recurrir a los contactos")
        return (
            <View>
                <Button title={'Permitir uso de contactos'} onPress={() => askForContactsPermission()} />
            </View>
        );
    }

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    function isContact(contact) {
        return contact.name === busqueda
    }

    function lookingForContacts() {
        if (busqueda.length > 2) {
            let data = contactosBuscados.find(isContact);
            setFound(data)
            console.log(data);
        }
    }

    if (hasPermission === 'granted') {
        (async () => {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers]
            });
            setContactosBuscados(data);
        })()
    }

    async function setContact(){
        const obj = {"name" : found.name , "number" : found.phoneNumbers[0].number}
        console.log(obj)
        await AsyncStorage.setItem("Numerodeemergencia", JSON.stringify(obj))
    }
    async function getContact() {
        const contacto = await AsyncStorage.getItem("Numerodeemergencia")
        setContactoStorage(JSON.parse(contacto));
    }
    async function combinatedFunction(){
        await setContact();
        await getContact();
    }

    return (
        <View>
            <Text>Numero Emergencias</Text>
            <TextInput
                placeholder="Introduzca su contacto de emergencias"
                onChangeText={setBusqueda}
                value={busqueda}
            />
            {found&&<><Button title={`Agregar a ${found.name} como numero de emergencias`} onPress={() => combinatedFunction()} /></>}
            {contactoStorage&&<Text>Nombre: {contactoStorage?.name} Telefono: {contactoStorage?.number}</Text>}
        </View>
    )

}