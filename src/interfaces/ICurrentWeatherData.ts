import type {ICondition} from "@/interfaces/ICondition";

export interface ICurrentWeatherData {
    last_updated_epoch: number,
    last_updated: string,
    temp_c: number,
    temp_f: number,
    is_day: number,
    condition: ICondition,
    wind_mph: number,
    wind_kph: number,
    wind_dir: string,
    precip_mm: number,
    precip_in: number,
    humidity: number,
    feelslike_c: number,
    feelslike_f: number,
    uv: number,
}