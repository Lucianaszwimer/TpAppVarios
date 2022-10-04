import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function IdentificacionApp() {
    const navigation = useNavigation();
   /*Intent intent = new Intent("android.media.action.IMAGE_CAPTURE");
    startActivity(intent);*/
    return (
        <View>
            <Text>Identificacion App</Text>
            <Image source={require('../img/qr.png')}/>
        </View>
          
    );
}