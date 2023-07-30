import {defineStore} from 'pinia'
import {ref} from 'vue'
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const useApiStore = defineStore('apiStore', () => {
    const apiData = ref()

    const getData = async (route: string, params: Object) => {
        return await axios.get(
            `${baseUrl}${route}`,
            {params: params}
        )
    }

    const getWeatherCity = async (query: string) => {
        const response = await getData('/current.json', {
            q: query,
            key: apiKey
        })
        apiData.value = response.data
    }

    return {
        apiData,
        getWeatherCity
    }
})
