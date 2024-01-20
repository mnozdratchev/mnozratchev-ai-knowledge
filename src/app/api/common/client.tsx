import axios from "axios";

export const client = axios.create({
    baseURL: "http://192.168.178.54:5002/api"
});