export default {
    methods: {
        /**
         * reCAPTCHA response token
         * @param response
         **/
        onVerify (response) {
            console.log('Verify: ' + response)
        },

        /**
         * reCAPTCHA token expired
         **/
        onExpired () {
            this.form.errors.set({
                recaptcha_response: 'Le code de validation a expiré.'
            });
        },

        /**
         * Direct call reset method
         **/
        resetRecaptcha () {
            this.$refs.recaptcha.reset()
        }
    }
}