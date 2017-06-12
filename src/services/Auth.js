import { Auth } from './Firebase'

export const User = {
    /**
     * Get the cuurent auth user
     *
     * @param user
     */
    me (user) {
        return new Promise((resolve, reject) => {
            http.get(`/api/u/${user}/me`).then(({body}) => {
                resolve(body)
            }).catch(error => reject(error))
        })
    },
    /**
     * Log a user in.
     *
     * @param {Object} data
     */
    login (data) {
        let { email, password } = data;
        return new Promise((resolve, reject) => {
            Auth.signInWithEmailAndPassword(email, password).then((response) => {
                resolve(response)
            }).catch(error => reject(error))
        })
    },
    /**
     * Log the current user out.
     */
    logout () {
        return new Promise((resolve, reject) => {
            Auth.signOut().then((response) => {
                resolve(response)
            }).catch(error => reject(error))
        })
    },

    /**
     * Log a user in.
     *
     * @param {Object} data
     */
    register (data) {
        let { email, password } = data;
        return new Promise((resolve, reject) => {
            /**
            Auth.createUser(user).then(({body}) => {
                resolve(body)
            }).catch(error => reject(error));
            **/

            Auth.createUserWithEmailAndPassword(email, password).then((response) => {
                resolve(response)
            }).catch(error => reject(error))
        })
    },

    /**
     * reset the password
     *
     * @param {String} email
     * @return {!firebase.Promise.<void>|firebase.Promise<any>|*|{name, a}}
     */
    resetPassword (email) {
        return Auth.sendPasswordResetEmail(email);
    },

    /**
     * Update the current user's profile.
     *
     * @param {Object} user
     * @param {string} password Can be an empty string if the user is not changing his password.
     */
    updateProfile (user, password) {
        return new Promise((resolve, reject) => {
            /**
            http.put('/api/me', {
                password,
                username: user.username,
                email: user.email
            }).then(({body}) => {
                resolve(body)
            }).catch(error => reject(error))
            **/
        })
    },
    /**
     * Stores a new user into the database.
     *
     * @param  {string}   username
     * @param  {string}   email
     * @param  {string}   password
     */
    store (username, email, password) {
        return new Promise((resolve, reject) => {
            /**
            http.post('/api/user', {username, email, password}).then(({body: user}) => {
                resolve(user)
            }).catch(error => reject(error))
            **/
        })
    },

    /**
     * Update a user's profile.
     *
     * @param  {Object}   user
     * @param  {String}   name
     * @param  {String}   email
     * @param  {String}   password
     */
    update (user, name, email, password) {
        return new Promise((resolve, reject) => {
            /**
            http.put(`/api/user/${user.id}`, {name, email, password}).then(({body: user}) => {
                resolve(user)
            }).catch(error => reject(error))
            **/
        })
    },
    /**
     * Delete a user.
     */
    destroy () {
        return new Promise((resolve, reject) => {
            Auth.currentUser.delete()
                .then(response => resolve(response))
                .catch(error => reject(error));
        })
    }
};
