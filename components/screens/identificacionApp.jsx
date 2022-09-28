import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function IdentificacionApp(){
    const navigation = useNavigation();
    return (
        <View>
            <Text>Identificacion App</Text>
        </View>
    );
}