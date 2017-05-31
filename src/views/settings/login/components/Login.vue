<template lang="html">
    <main class="page-container page-login">
        <div class="animated bounceIn">
            <div class="form-card">
                <div class="form-card-head">
                    <header class="header">
                        <img src="../../../../assets/images/login.png" alt="">
                        <h1>Accéder à votre compte</h1>
                    </header>
                    <span class="bottom">Veuillez entrer vos informations utilisateur.</span>
                </div>
                <div class="form-card-body">
                    <login-form/>
                </div>
            </div>
        </div>
    </main>
</template>

<script type="text/babel">
    import LoginForm from './LoginForm.vue'

    export default {
        components: {
            LoginForm
        },

        head: {
            title: {
                inner: 'Se connecter'
            },
            meta: [
                // ...
            ]
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../../../../assets/styles/views/login";
</style>