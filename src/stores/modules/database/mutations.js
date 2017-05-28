import { SET_CONFIG, SET_CONFIG_LANG } from './types'

/**
 * mutations
 * @type {{[[SET_CONFIG]]: ((state, config))}}
 */
const mutations = {
    [SET_CONFIG] (state, config) {
        state.database.config = config
    },

    [SET_CONFIG_LANG] (state, { lang }) {
        state.lang = lang
    }
};

export default mutations