import { http, User } from '@/services'
import Errors from './Errors'
import { deepCopy, hasFile, toFormData } from '@/utils'

class Form {
    /**
     * Create a new form instance.
     *
     * @param {Object} data
     */
    constructor (data = {}) {
        this.busy = false;
        this.successful = false;
        this.errors = new Errors();
        this.originalData = deepCopy(data);

        Object.assign(this, data)
    }

    /**
     * Get the form data.
     *
     * @return {Object}
     */
    data () {
        const data = {};

        Object.keys(this)
            .filter(key => !Form.ignore.includes(key))
            .forEach(key => {
                data[key] = this[key]
            });

        return data
    }

    /**
     * Start processing the form.
     */
    startProcessing () {
        this.errors.clear();
        this.busy = true;
        this.successful = false;
    }

    /**
     * Finish processing the form.
     */
    finishProcessing () {
        this.busy = false;
        this.successful = true;
    }

    /**
     * Clear the form errors.
     */
    clear () {
        this.errors.clear();
        this.successful = false;
    }

    /**
     * Reset the form fields.
     */
    reset () {
        Object.keys(this)
            .filter(key => !Form.ignore.includes(key))
            .forEach(key => {
                this[key] = deepCopy(this.originalData[key]);
            })
    }

    /**
     * Submit the from via a GET request.
     *
     * @param  {String} url
     * @return {Promise}
     */
    get (url) {
        return this.submit('get', url);
    }

    /**
     * Submit the from via a POST request.
     *
     * @param  {String} url
     * @return {Promise}
     */
    post (url) {
        return this.submit('post', url);
    }

    /**
     * Submit the from via a PATCH request.
     *
     * @param  {String} url
     * @return {Promise}
     */
    patch (url) {
        return this.submit('patch', url);
    }

    /**
     * Submit the from via a PUT request.
     *
     * @param  {String} url
     * @return {Promise}
     */
    put (url) {
        return this.submit('put', url);
    }

    /**
     * Submit the form data via an HTTP request.
     *
     * @param  {String} method (get, post, patch, put)
     * @param  {String} url
     * @return {Promise}
     */
    submit (method, url) {
        this.startProcessing();

        url = this.route(url);
        let data = this.data();

        if (hasFile(data)) {
            data = toFormData(data)
        }

        if (method === 'get') {
            data = { params: data }
        }

        return new Promise((resolve, reject) => {
            http.request(url, method, data)
                .then(response => {
                    this.finishProcessing();
                    resolve(response);
                })
                .catch(error => {
                    this.busy = false;
                    this.errors.set(this.extractErrors(error));
                    reject(error);
                })
        })
    }

    /**
     * Log a user in.
     */
     login () {
         this.startProcessing();
         let data = this.data();

         return new Promise((resolve, reject) => {
             User.login(data)
                .then(response => {
                    this.finishProcessing();
                    resolve(response);
                })
                .catch(error => {
                    this.busy = false;
                    this.errors.set(this.extractErrors(error));
                    reject(error);
                })
            })
     }

    register () {
        this.startProcessing();
        let data = this.data();

        if (hasFile(data)) {
            data = toFormData(data)
        }

        return new Promise((resolve, reject) => {
            User.register(data)
                .then(response => {
                    this.finishProcessing();
                    resolve(response);
                })
                .catch(error => {
                    this.busy = false;
                    this.errors.set(this.extractErrors(error));
                    reject(error);
                })
        })
    }

    resetPassword () {
        this.startProcessing();
        let data = this.data();

        return new Promise((resolve, reject) => {
            User.resetPassword(data.email)
                .then(response => {
                    this.finishProcessing();
                    resolve(response);
                })
                .catch(error => {
                    this.busy = false;
                    this.errors.set(this.extractErrors(error));
                    reject(error);
                })
        })
    }

    /**
     * Extract the errors from the response object.
     *
     * @param  {Object} response
     * @return {Object}
     */
    extractErrors (response) {
        if (response.status === 500 || response.status === 405) {
            return { error: Form.errorMessage };
        }
        if (response.code === 'auth/user-not-found') {
            return { error: Form.errorMessage };
        }

        if (response.message) {
            return { error: response.message };
        }

        /**
        if (response.body.message) {
            return { ...response.body.errors };
        }

        if (response.body.data) {
            return { ...response.body.data };
        }

        return { ...response.body };
        **/
    }

    /**
     * Get a named route.
     *
     * @param {String} name
     * @param {Object} parameters
     * @return {String}
     */
    route (name, parameters = {}) {
        let url = name;

        if (Form.routes.hasOwnProperty(name)) {
            url = decodeURI(Form.routes[name])
        }

        if (typeof parameters !== 'object') {
            parameters = { id: parameters };
        }

        Object.keys(parameters).forEach(key => {
            url = url.replace(`{${key}}`, parameters[key]);
        });

        return url;
    }
}

Form.routes = {};
Form.errorMessage = 'Something went wrong. Please try again.';
Form.ignore = ['busy', 'successful', 'errors', 'originalData'];

export default Form