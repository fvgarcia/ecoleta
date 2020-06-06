import axios from 'axios';

const ibgeService = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades'
});

export default ibgeService;