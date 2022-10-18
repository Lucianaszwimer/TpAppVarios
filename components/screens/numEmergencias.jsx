import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import * as Contacts from 'expo-contacts';
import { mensajeUSuario } from './mensajeUsuario';


export function NumEmergencias() {
    const navigation = useNavigation();
    const [contactosBuscados, setContactosBuscados] = useState([]);
    const [busqueda, setBusqueda] = useState([]);
    const [hasPermission, setHasPermission] = useState(null);

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

    if (hasPermission === 'granted') {
        (async () => {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers]
            });
            setContactosBuscados(data)

            if (busqueda.length > 2) {
                const found = contactosBuscados.find(isContact);
                console.log(found);
                return(
                <Button title={`Agregar a ${found} como numero de emergencias`}
                    onPress={() => localStorage.setItem("Numero de emergencia", found)} />
                );
            }
        })()
        return (
            <View>
                <Text>Numero Emergencias</Text>
                <TextInput
                    placeholder="Introduzca su contacto de emergencias"
                    onChangeText={setBusqueda}
                    value={busqueda}
                />
            </View>
        )
    }
}