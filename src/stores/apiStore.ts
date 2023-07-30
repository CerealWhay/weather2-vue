import {defineStore} from 'pinia'
import type {IApiData} from "@/interfaces/IApiData";
import {ref, computed} from 'vue'
import axios from "axios";


const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const useApiStore = defineStore('apiStore', () => {
    const _apiData = ref<IApiData>()
    const location = computed(() => _apiData.value?.location)
    const current = computed(() => _apiData.value?.current)
    const forecast = computed(() => _apiData.value?.forecast)

    const _getData = async (route: string, params: Object) => {
        return await axios.get(
            `${baseUrl}${route}`,
            {params: params}
        )
    }

    const getWeatherCity = async (query: string) => {
        const response = await _getData('/forecast.json', {
            q: query,
            key: apiKey,
            days: 3,
        })
        _apiData.value = response.data
    }

    return {
        _apiData,
        getWeatherCity,
        location,
        current,
        forecast
    }
})
