import { Alert } from 'react-native';
import axios from 'axios';

export function axiosWeather() {
    const baseUrl='http://api.weatherapi.com/v1';
    const ApiKey = "fa04f6e41f1448bda88124829223009";
    let ubicacion = "Buenos Aires";
    
    axios.get(`${baseUrl}/current.json?key=${ApiKey}&q=${ubicacion}`)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            Alert.alert("Fallo la llamada a la API clima")
            console.log(error);
        })
}

// http://api.weatherapi.com/v1/current.json?key=fa04f6e41f1448bda88124829223009&q=Buenos Aires