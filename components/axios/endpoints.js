import axios from 'axios';
import { mensajeUSuario } from '../screens/mensajeUsuario';

export async function  axiosWeather(msj) {
    const baseUrl='http://api.weatherapi.com/v1';
    const ApiKey = "5682eb62c5cc44f8a5c120035220111";
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

// http://api.weatherapi.com/v1/current.json?key=5682eb62c5cc44f8a5c120035220111&q=Buenos Aires