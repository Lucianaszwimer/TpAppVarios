import { StyleSheet, View, Text, Vibration } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function mensajeUSuario() {
    const navigation = useNavigation();

    Vibration.vibrate();

    return (
        <View>
            <Button title="Vibrate once" onPress={() => Vibration.vibrate()} />
            <Text>Mensaje Usuario</Text>
        </View>
    );
}