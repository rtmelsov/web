import {ru} from './ru.ts'
import {en} from './en.ts'

const languages: Record<string, Record<LangKey, string>> = {
    en,
    ru
};

export const localeList = ['en', 'ru'] as const;

export type LangKey = keyof typeof en; // 'ru' | 'en'
export type Locale = typeof localeList[number]; // list of translate texts from en list
export type LocaleState = {locale: Locale} // locale state type

export default languages;