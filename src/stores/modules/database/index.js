import * as database from '@/services/database';
import { languages } from '@/services/languages/locales'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

/**
 * Initial state
 * @type {{database, lang: string, languages: *}}
 */
const state = {
    database,
    lang: database.config.defaultLang,
    languages
};

export default {
    state,
    getters,
    actions,
    mutations
}