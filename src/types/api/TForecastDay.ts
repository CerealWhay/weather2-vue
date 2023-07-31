import type {TForecastHour} from '@/types/api/TForecastHour'
import type {TForecastDayDetail} from '@/types/api/TForecastDayDetail'

export interface TForecastDay {
    date: string,
    date_epoch: number,
    day: TForecastDayDetail,
    hour: TForecastHour[],
}