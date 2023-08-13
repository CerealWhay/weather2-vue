import {defineStore} from 'pinia'
import type {TApiData} from "@/types/api/TApiData";
import {ref, computed} from 'vue'
import axios from "axios";
import type {AxiosPromise} from "axios";
import {defaultApiValue} from "@/utils/defaultApiValue";
import type {TForecastHour} from "@/types/api/TForecastHour";
import type {TLocation} from "@/types/api/TLocation";
import type {TCurrentWeatherData} from "@/types/api/TCurrentWeatherData";
import type {TForecastDay} from "@/types/api/TForecastDay";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const useApiStore = defineStore('apiStore', () => {
    const _apiData = ref<TApiData>(defaultApiValue)
    const location = computed<TLocation>(() => _apiData.value.location)
    const current = computed<TCurrentWeatherData>(() => _apiData.value.current)
    const forecastDay = computed<TForecastDay[]>(() => _apiData.value.forecast.forecastday)
    const forecastHourly = computed<TForecastHour[]>(() => {
        const hours: TForecastHour[] = [];
        _apiData.value.forecast.forecastday.forEach(day => {
            hours.push(...day.hour)
        })
        return hours
    })

    const _getData = async (route: string, params: Object): Promise<AxiosPromise> => {
        return await axios.get(
            `${baseUrl}${route}`,
            {params: params}
        )
    }

    const getWeatherCity = async (query: string): Promise<void> => {
        const response = await _getData('/forecast.json', {
            q: query,
            key: apiKey,
            days: 3,
        })
        _apiData.value = response.data
    }

    return {
        getWeatherCity,
        location,
        current,
        forecastDay,
        forecastHourly,
    }
})
