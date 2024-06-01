import axios from 'axios'

export const requester = axios.create({
    baseURL: 'https://656dc6c6bcc5618d3c23ed94.mockapi.io/todo/api/'
})