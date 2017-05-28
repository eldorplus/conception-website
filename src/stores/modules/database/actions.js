import { SET_CONFIG, SET_CONFIG_LANG } from './types'

/**
 * actions
 * @param commit
 * @param config
 */
export const setConfig = ({commit}, config) => {
    commit(SET_CONFIG, config)
};

/**
 * actions
 * @param commit
 * @param state
 * @param language
 */
export const systemLanguage = ({ commit, state }, language) => {
    const lang = Object.keys(state.languages).indexOf(language) > -1 ? language : state.database.config.defaultLang;
    commit(SET_CONFIG_LANG, { lang });
};