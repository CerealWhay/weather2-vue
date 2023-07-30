import type {IForecastHour} from '@/interfaces/IForecastHour'
import type {IForecastDayDetail} from '@/interfaces/IForecastDayDetail'

export interface IForecastDay {
    date: string,
    date_epoch: number,
    day: IForecastDayDetail,
    hour: IForecastHour[],
}