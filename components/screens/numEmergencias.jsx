import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function NumEmergencias(){
    const navigation = useNavigation();
    return (
        <View>
            <Text>Numero Emergencias</Text>
        </View>
    );
}