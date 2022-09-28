import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function Contactos(){
    const navigation = useNavigation();
    return (
        <View>
            <Text>Contacto</Text>
        </View>
    );
}