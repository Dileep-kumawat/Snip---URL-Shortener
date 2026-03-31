import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env['VITE_BACKEND_ENDPOINT'],
    withCredentials: true
});

export async function getUrls() {
    const res = await api.get('/');

    return res.data;
}

export async function createUrl({ url }) {
    const res = await api.post('/create', { url });

    return res.data;
}

export async function getUrl({ id }) {
    const res = await api.get('/' + id);

    return res.data;
}

export async function deleteUrl({ id }) {
    const res = await api.delete('/' + id);

    return res.data;
}