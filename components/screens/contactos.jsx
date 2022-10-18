import React, { useEffect, useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';
import { mensajeUSuario } from './mensajeUsuario';

export function Contactos() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers]
                });

                setContacts(data);

                if (data.length > 0) {
                    const contact = data[0];
                    console.log(contact);
                }
            } else {
                mensajeUSuario("Se denego el acceso a los contactos");
                return (
                    <Button title={'Permitir contactos'} onPress={() => Contacts.requestPermissionsAsync()} />
                );
            }
        })();
    }, []);

    return (
        <View>
            <FlatList
                data={contacts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <>
                        <Button title={`Nombre: ${item.name}`} />
                        <Button title={`Num: ${item.phoneNumbers[0].number}`} />
                    </>
                )}
            />
        </View>
    );
}