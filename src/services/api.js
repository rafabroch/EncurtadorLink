import axios from 'axios';

export const key = "5793bfc03e980b1d104d1bc9b3e9ecaad095d12a"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;

