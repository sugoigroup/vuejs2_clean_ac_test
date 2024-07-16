import axios from 'axios';

export const httpGet = (url, options = null) => {
    return axios.get(url, options);
};

export const httpPost = (url, body = null, options = null) => {
    return axios.post(url, body, options);
};

export const httpPut = (url, body = null, options = null) => {
    return axios.put(url, body, options);
};

export const httpDelete = (url, options = null) => {
    return axios.delete(url, options);
};