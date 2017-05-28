<template lang="html">
    <main id="content" class="content" role="main">
        <section class="splash-container">
            <div class="panel panel-default panel-border-color panel-border-color-primary animated bounceIn">
                <div class="panel-heading">
                    <header class="wrapper text-center">
                        <strong>Accéder à votre compte</strong>
                    </header>
                    <span class="splash-description">Veuillez entrer vos informations utilisateur.</span>
                </div>
                <div class="panel-body">
                    <login-form/>
                </div>
            </div>
            <div class="line line-dashed"></div>
            <div class="splash-footer">

            </div>
        </section>
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
                inner: 'Login'
            },
            meta: [
                // ...
            ]
        }
    }
</script>
