import type {TCondition} from "@/types/api/TCondition";

export type TCurrentWeatherData = {
    last_updated_epoch: number,
    last_updated: string,
    temp_c: number,
    temp_f: number,
    is_day: number,
    condition: TCondition,
    wind_mph: number,
    wind_kph: number,
    wind_degree: number,
    wind_dir: string,
    precip_mm: number,
    precip_in: number,
    humidity: number,
    feelslike_c: number,
    feelslike_f: number,
    uv: number,
}