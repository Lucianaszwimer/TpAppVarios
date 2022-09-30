import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { axiosWeather } from '../axios/endpoints'

/*
https://www.weatherapi.com/docs/ 
 const [dataWeather,setDataWeather]=useState('')

    useEffect(()=>{
        
        //clima
        setDataWeather = axiosWeather();
        console.log(dataWeather)    
    }, [])
*/

export function HoraTemperatura() {
    const navigation = useNavigation();     
    let dataWeather

    useEffect(()=>{
        dataWeather = axiosWeather()
        console.log(dataWeather);
    }, [])

    //clima
    
    //horario
    const now = new Date();
    const current = now.getHours() + ':' + now.getMinutes();

    return (
        <View>
            <Text>Ubicacion: {dataWeather.location.name}</Text>
            <Text>Hora: {current} y Temperatura: {dataWeather.current.temp_c}</Text>
        </View>
    );
}