import type {TApiData} from "@/types/api/TApiData";

export const defaultApiValue: TApiData = {
    location: {
        name: '',
        localtime_epoch: 0,
        localtime: '',
    },
    current: {
        last_updated_epoch: 0,
        last_updated: '',
        temp_c: 0,
        temp_f: 0,
        is_day: 0,
        condition: {
            text: '',
            icon: '',
            code: 0,
        },
        wind_mph: 0,
        wind_kph: 0,
        wind_dir: '',
        precip_mm: 0,
        precip_in: 0,
        humidity: 0,
        feelslike_c: 0,
        feelslike_f: 0,
        uv: 0,
    },
    forecast: {
        forecastday: [
            {
                date: '',
                date_epoch: 0,
                day: {
                    maxtemp_c: 0,
                    maxtemp_f: 0,
                    mintemp_c: 0,
                    mintemp_f: 0,
                    daily_chance_of_rain: 0,
                    daily_chance_of_snow: 0,
                    condition: {
                        text: '',
                        icon: '',
                        code: 0,
                    },
                },
                hour: [
                    {
                        time_epoch: 0,
                        time: '',
                        temp_c: 0,
                        temp_f: 0,
                        is_day: 0,
                        condition: {
                            text: '',
                            icon: '',
                            code: 0,
                        },
                        chance_of_rain: 0,
                        chance_of_snow: 0,
                    }
                ],
            }
        ]
    },
}