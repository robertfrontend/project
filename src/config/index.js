import axios from 'axios'

export const baseURL = "http://128.199.11.216/api/";

export const API = axios.create({
    baseURL: baseURL
})