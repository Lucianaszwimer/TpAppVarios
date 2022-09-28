import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function LlamadoEmerg(){
    const navigation = useNavigation();
    return (
        <View>
            <Text>Llamado Emergencias</Text>
        </View>
    );
}