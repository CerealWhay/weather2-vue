import type {TCondition} from '@/types/api/TCondition'

export type TForecastDayDetail = {
    maxtemp_c: number,
    maxtemp_f: number,
    mintemp_c: number,
    mintemp_f: number,
    daily_chance_of_rain: number,
    daily_chance_of_snow: number,
    condition: TCondition,
}