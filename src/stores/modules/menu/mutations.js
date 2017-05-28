import { SET_SIDE_MENU } from './types'

/**
 * mutations
 * @type {{[SET_SIDE_MENU]: ((state, menu))}}
 */
const mutations = {
    /**
     * @param state
     * @param menu
     */
    [SET_SIDE_MENU] (state, menu) {
        state.menu = menu
    }
};

export default mutations