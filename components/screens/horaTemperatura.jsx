import { StyleSheet, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { React, useEffect, useState } from 'react';
import { axiosWeather } from '../axios/endpoints'

/*
https://www.weatherapi.com/docs/ 

https://javapapers.com/android/get-current-location-in-android/

https://www.google.com/maps/search/?api=1&query=
*/

export function HoraTemperatura() {
    const navigation = useNavigation();
    const [dataWeather, setDataWeather] = useState({})
    useEffect(async () => {
        //clima
        const clima = await axiosWeather();
        setDataWeather(clima);
    }, [])
    //horario
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }

    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());
    const current = h + ":" + m + ":" + s;
    //const current = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    return (
        <View>
            <Text style={styles.texto}>Ubicacion: {dataWeather?.location?.name}</Text>
            <Text style={styles.texto}>Temperatura: {dataWeather?.current?.temp_c}°</Text>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/3942/3942094.png',
                }}
            />
            <Text style={styles.hora}>{current}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        fontWeight: "bold"
    },
    hora: {
        justifyContent: 'center',
        textAlign: 'center',
        margin: 50,
        fontSize: 30,
        fontWeight: "bold"
    },
    tinyLogo: {
        width: 70,
        height: 70,
    }
});