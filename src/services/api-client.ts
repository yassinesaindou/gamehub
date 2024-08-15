import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}
  

const apiClient = axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'7ce5f0474ee042ffa66db4b1a76548cc'
    }
})

export default apiClient;