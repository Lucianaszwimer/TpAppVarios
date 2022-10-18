import axios from 'axios';
import { mensajeUSuario } from '../screens/mensajeUsuario';

export async function  axiosWeather(msj) {
    const baseUrl='http://api.weatherapi.com/v1';
    const ApiKey = "1b3e8a05f36f40c5899182329221710";
    let ubicacion = msj;
    
    return axios.get(`${baseUrl}/current.json?key=${ApiKey}&q=${ubicacion}`)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            mensajeUSuario("Fallo la llamada a la API clima")
            console.log(error);
        })
}

// http://api.weatherapi.com/v1/current.json?key=1b3e8a05f36f40c5899182329221710&q=Buenos Aires