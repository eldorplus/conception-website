import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

/**
 * Initial stat
 * @type {{menu: boolean}}
 */
const state = {
    menu: false
};

export default {
    state,
    getters,
    actions,
    mutations
}