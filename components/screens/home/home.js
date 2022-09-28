import { StyleSheet, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Button
                title="Contactos"
                onPress={() => navigation.navigate('Contactos')}
            />
             <Button
                title="Hora y Temperatura"
                onPress={() => navigation.navigate('HoraTemperatura')}
            />
             <Button
                title="Identificacion de Apps"
                onPress={() => navigation.navigate('IdentificacionApp')}
            />
             <Button
                title="Llamado de Emergencias"
                onPress={() => navigation.navigate('LlamadoEmerg')}
            />
             <Button
                title="Numero de Emergencias"
                onPress={() => navigation.navigate('NumEmergencias')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
});
