import { io } from 'socket.io-client'
import axios from 'axios';

const URL = 'http://localhost:3000'
export const socket = io(URL, {autoConnect: false})

export const api =   axios.create({
    baseURL: URL,
    timeout: 5000,
})