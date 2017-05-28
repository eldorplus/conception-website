import { SET_SIDE_MENU } from './types'

/**
 * @param commit
 * @param visibility
 */
export const setSideMenu = ({commit}, visibility) => {
    commit(SET_SIDE_MENU, visibility)
};