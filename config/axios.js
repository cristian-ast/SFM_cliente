import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : "https://somossfm.herokuapp.com"
});

export default clienteAxios;