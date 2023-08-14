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
import type {TSearchedCity} from "@/types/api/TSearchedCity";
import {debounce} from "@/utils/debounce";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const useApiStore = defineStore('apiStore', () => {
    const _apiData = ref<TApiData>(defaultApiValue)
    const location = computed<TLocation>(() => _apiData.value.location)
    const current = computed<TCurrentWeatherData>(() => _apiData.value.current)
    const forecastDay = computed<TForecastDay[]>(() => _apiData.value.forecast.forecastday)
    const forecastHourly = computed<TForecastHour[]>(() => {
        let hours: TForecastHour[] = [];
        _apiData.value.forecast.forecastday.forEach(day => {
            hours.push(...day.hour)
        })
        hours = hours.filter(hour => hour.time_epoch >= location.value.localtime_epoch)
        return hours.slice(0, 24)
    })

    const searchedCities = ref<TSearchedCity[]>([])

    const _getData = async (route: string, params: Object): Promise<AxiosPromise> => {
        return await axios.get(
            `${baseUrl}${route}`,
            {params: params}
        )
    }

    const getCities = async (query: string): Promise<void> => {
        const response = await _getData('/search.json', {
            q: query,
            key: apiKey,
        })
        searchedCities.value = response.data
    }

    const getWeatherCity = async (query?: string): Promise<void> => {
        const searchQuery = query || localStorage.getItem('lastSearchQuery') || "detroit"
        const response = await _getData('/forecast.json', {
            q: searchQuery,
            key: apiKey,
            days: 3,
        })
        _apiData.value = response.data
        localStorage.setItem('lastSearchQuery', searchQuery)
    }

    return {
        getWeatherCity,
        location,
        current,
        forecastDay,
        forecastHourly,

        getCities,
        searchedCities,
    }
})
