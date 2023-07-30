import type {ILocation} from "@/interfaces/ILocation";
import type {ICurrentWeatherData} from "@/interfaces/ICurrentWeatherData";
import type {IForecast} from "@/interfaces/IForecast";

export interface IApiData {
    location: ILocation,
    current: ICurrentWeatherData,
    forecast: IForecast,
}