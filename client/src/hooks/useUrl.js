import { useContext } from 'react';
import { getUrls, getUrl, createUrl, deleteUrl } from '../apis/url.api';
import { urlContext } from '../contexts/UrlContext';

export function useUrl() {
    const { urls, setUrls } = useContext(urlContext);

    async function handleGetUrls() {
        const res = await getUrls();

        setUrls(res.urls);

        return {
            success: true
        }
    }
    async function handleGetUrl({ id }) {
        await getUrl({ id });

        return {
            success: true
        }
    }
    async function handleCreateUrl({ url }) {
        const res = await createUrl({ url });

        return {
            res,
            success: true
        }
    }
    async function handleDeleteUrl({ id }) {
        await deleteUrl({ id });

        return {
            success: true
        }
    }

    return {
        urls,
        setUrls,
        handleGetUrls,
        handleCreateUrl,
        handleGetUrl,
        handleDeleteUrl
    }
}