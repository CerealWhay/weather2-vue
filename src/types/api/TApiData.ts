import type {TLocation} from "@/types/api/TLocation";
import type {TCurrentWeatherData} from "@/types/api/TCurrentWeatherData";
import type {TForecast} from "@/types/api/TForecast";

export interface TApiData {
    location: TLocation,
    current: TCurrentWeatherData,
    forecast: TForecast,
}