import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function HoraTemperatura(){
    const navigation = useNavigation();
    return (
        <View>
            <Text>Hora y Temperatura</Text>
        </View>
    );
}