import { StyleSheet, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Button style={styles.boton}
                title="Contactos"
                onPress={() => navigation.navigate('Contactos')}
            />
             <Button style={styles.boton}
                title="Hora y Temperatura"
                onPress={() => navigation.navigate('HoraTemperatura')}
            />
             <Button style={styles.boton}
                title="Identificacion de Apps"
                onPress={() => navigation.navigate('IdentificacionApp')}
            />
             <Button style={styles.boton}
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
    boton : {
        marginTop: 10,
        marginBottom: 10

    }
});
