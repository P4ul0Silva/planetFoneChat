import { Socket, io } from 'socket.io-client';
import axios from 'axios';

const URL = 'http://localhost:3000';
export const socket: Socket = io(URL, {autoConnect: false});

export const api =   axios.create({
    baseURL: URL,
    timeout: 5000,
})