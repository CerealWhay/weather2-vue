import {defineStore} from 'pinia'
import {computed, ref} from 'vue'
import type {TTempType} from "@/types/TTempType";
import type {TTemps} from "@/types/TTemps";

export const useAppStore = defineStore('appStore', () => {
    const tempTypes = ref<TTempType[]>([
        {name: 'celsius', symbol: '℃', type: 'c'},
        {name: 'fahrenheit', symbol: '℉', type: 'f'}
    ]);
    const selectedTempType = ref<TTempType>(
        {name: 'celsius', symbol: '℃', type: 'c'}
    )
    const notSelectedTempType = computed<TTempType>(() => {
        return tempTypes.value.find(type => type.symbol !== selectedTempType.value.symbol)
    })

    const selectTempType = (tempType: TTempType): void => {
        selectedTempType.value = tempType
    }

    const getTempText = (temps: TTemps): string => {
        const temp_c: number = Math.round(temps.tempC)
        const temp_f: number = Math.round(temps.tempF)

        if (selectedTempType.value.type === 'c') {
            return `${temp_c}${selectedTempType.value.symbol}`
        }
        if (selectedTempType.value.type === 'f') {
            return `${temp_f}${selectedTempType.value.symbol}`
        }
        return ''
    }

    return {
        tempTypes,
        selectedTempType,
        notSelectedTempType,
        selectTempType,
        getTempText
    }
})
