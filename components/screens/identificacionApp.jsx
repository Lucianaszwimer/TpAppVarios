import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { mensajeUSuario } from './mensajeUsuario';
/*Intent intent = new Intent("android.media.action.IMAGE_CAPTURE");
  startActivity(intent);
  
  expo install expo-barcode-scanner
  
  https://www.youtube.com/watch?v=LtbuOgoQJAg
  
  */
export function IdentificacionApp() {
    const navigation = useNavigation();

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('No escaneado todavia')

    //Funcion de pedir permiso para la camara
    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == 'granted')
        })()
    }
    
    // Pedimos el permiso de la camara llamando a la funcion de arriba
    useEffect(() => {
        askForCameraPermission();
    }, []);

    //Lo que pasa despues de escanear el qr
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data);
        console.log('Type: ' + type + '/nData: ' + data)
    }

    //Chequeamos permisos y devolvemos a la pantalla
    if (hasPermission === null) {
        return (
            <View>
                <Text>Pidiendo permiso para utilizar la camara</Text>
            </View>
        )}
    if (hasPermission === false) {
        mensajeUSuario("Se rechazo el permiso para utilizar la camara")
        return (
            <View>
                <Text style={styles.texto}>Escanea el codigo para averiguar quienes somos!</Text>
                <Image style={styles.codigo} source={require('../../img/qr.png')} />
                <Button title={'Permitir camara'} onPress={() => askForCameraPermission()} />
            </View>
        )}
    if (hasPermission === true) {
        return (
        <View>
            <Text style={styles.texto}>Escanea el codigo para averiguar quienes somos!</Text>
            <Image style={styles.codigo} source={require('../../img/qr.png')} />  
            <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{ height: 400, width: 400 }} />
            <Text>{text}</Text>
            {scanned && <Button title={'Escanear denuevo'} onPress={() => setScanned(false)} color='tomato' />}
        </View>
        )}
}

const styles = StyleSheet.create({
    codigo: {
        width: 150,
        height: 150
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold"
    }
});