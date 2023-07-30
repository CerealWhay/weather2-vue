import type {ICondition} from '@/interfaces/ICondition'

export interface IForecastHour {
    time_epoch: number,
    time: string,
    temp_c: number,
    temp_f: number,
    is_day: number,
    condition: ICondition,
    chance_of_rain: number,
    chance_of_snow: number,
}