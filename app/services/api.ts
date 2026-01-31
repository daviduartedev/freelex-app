import axios from 'axios';
import { getToken } from '../authStorage';

// Substitua pelo endereço IP da sua máquina se estiver testando em um dispositivo físico
const API_URL = 'http://192.168.5.97:3000';

const api = axios.create({
    baseURL: API_URL,
});

// Adiciona o token JWT automaticamente em todas as requisições
api.interceptors.request.use(async (config) => {
    const token = await getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const uploadImage = async (uri: string) => {
    const formData = new FormData();
    const filename = uri.split('/').pop();
    const match = /\.(\w+)$/.exec(filename || '');
    const type = match ? `image/${match[1]}` : `image`;

    // @ts-ignore
    formData.append('file', { uri, name: filename, type });

    const response = await api.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};

export default api;
