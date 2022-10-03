import { View, Text } from 'react-native';
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
    const [dataWeather, setDataWeather]=useState({})    
    useEffect(()=>{
        //clima
        const clima = axiosWeather();
        setDataWeather(clima);
    }, [])
    //horario
    const now = new Date();
    const current = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    return (
        <View>
            <Text>Ubicacion: {dataWeather.location.name}</Text>
            <Text>Hora: {current} y Temperatura: {dataWeather.current.temp_c}</Text>
        </View>
    );
}