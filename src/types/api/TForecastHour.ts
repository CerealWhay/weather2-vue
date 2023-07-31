import type {TCondition} from '@/types/api/TCondition'

export interface TForecastHour {
    time_epoch: number,
    time: string,
    temp_c: number,
    temp_f: number,
    is_day: number,
    condition: TCondition,
    chance_of_rain: number,
    chance_of_snow: number,
}