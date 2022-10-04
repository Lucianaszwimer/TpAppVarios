import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Scan from '../scan';

export function IdentificacionApp() {
    const navigation = useNavigation();
   /*Intent intent = new Intent("android.media.action.IMAGE_CAPTURE");
    startActivity(intent);*/
   
    return (
        <View>
            <Text style={styles.texto}>Escanea el codigo para averiguar quienes somos!</Text>
            <Image style={styles.codigo} source={require('../../img/qr.png')}/>
            <Button title="Presiona aquí para escanear otro codigo"/>
        </View>
          
    );
}

const styles = StyleSheet.create({
    codigo: {
        width:400,
        height: 400
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold"
    }
});