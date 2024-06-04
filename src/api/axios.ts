import axios from 'axios'

export const requester = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL
})