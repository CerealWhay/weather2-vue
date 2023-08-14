import {defineStore} from 'pinia'
import {ref, watch} from 'vue'
import {useApiStore} from "@/stores/apiStore";
import {debounce} from "@/utils/debounce";

export const useSearchStore = defineStore('searchStore', () => {
    const apiStore = useApiStore()
    const debouncedGetCities = debounce(apiStore.getCities, 500)

    addEventListener('click', () => { toggleSelector(false) })

    const searchString = ref<string>('');
    const isSearchSelectorOpen = ref<Boolean>(false);

    const toggleSelector = (isOpen: Boolean): void => {
        isSearchSelectorOpen.value = isOpen
    }
    const _setSearchString = (queryString: string) => {
        searchString.value = queryString
    }

    const selectCity = async (query:string) => {
        await apiStore.getWeatherCity(query)
        toggleSelector(false)
        _setSearchString('')
    }

    watch(searchString, (query) => {
        toggleSelector(!!query);
        if (query) debouncedGetCities(query)
    })

    return {
        searchString,
        isSearchSelectorOpen,
        toggleSelector,
        selectCity,
    }
})
