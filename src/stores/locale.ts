import { defineStore } from 'pinia'
import languages, {type LangKey, type Locale, type LocaleState} from '../locale/index.ts'

export const useLocaleStore = defineStore('locale', {
    state: (): LocaleState => {
        return {locale: 'en'};
    },
    getters: {
        translate: (state) => {
            return (text: LangKey) => {
                return languages[state.locale][text] || text;
            }
        }
    },
    actions: {
        changeLocale(locale: Locale) {
            this.locale = locale;
        }
    }
})