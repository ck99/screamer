import axios from 'axios';

const baseURI = 'https://fapi.binance.com';
const getExchangeInformation = () => {
    return axios.get(`${baseURI}/fapi/v1/exchangeInfo`)
        .then(resp => {
            return resp.data;
        })
}

export default getExchangeInformation;