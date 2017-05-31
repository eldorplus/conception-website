<template lang="html">
    <div class="main-content">
        <main id="content" class="content" role="main">
            <section class="splash-container reset-password animated fadeInUp">
                <div class="panel panel-default panel-border-color panel-border-color-primary">
                    <div class="panel-heading">
                        <header class="wrapper text-center">
                            <strong>Réinitialiser votre mot de passe</strong>
                        </header>
                    </div>
                    <div class="panel-body">
                        <alert-errors :form="form"></alert-errors>

                        <section class="m-b-lg">
                            <form @submit.prevent="submit" @keydown="form.errors.clear($event.target.name)"
                                  class="form-horizontal" accept-charset="UTF-8" role="form">
                                <p>Entrez votre adresse email, nous vous enverrons un lien de réinitialisation mot de passe.</p>
                                <div class="form-group xs-pt-20" :class="{ 'has-error': form.errors.has('email') }">
                                    <div class="col-md-12">
                                        <input v-model="form.email"
                                               tabindex="1"
                                               type="text"
                                               id="email"
                                               required
                                               class="form-control no-border"
                                               autocomplete="off"
                                               placeholder="E-mail">

                                        <has-error :form="form" field="email"></has-error>

                                    </div>
                                </div>

                                <p class="xs-pt-5 xs-pb-20">Vous ne vous souvenez plus de votre email ?
                                    <router-link :to="{ name: 'contact', exact: true }" rel="nofollow">Contactez nous.</router-link>
                                </p>

                                <div class="form-group xs-pt-5">
                                    <button type="submit" class="btn btn-block btn-primary btn-block btn-xl">
                                        Envoyer l'e-mail de réinitialisation mot de passe
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script type="text/babel">
    import {Form} from '@/components/Form'

    export default {
        name: 'email-rest',

        components: {},

        data() {
            return {
                form: new Form({
                    email: '',
                })
            }
        },

        head: {
            title: {
                inner: 'Password forgot'
            },
            meta: [
                // ...
            ]
        },

        methods: {
            submit () {
                this.form.clear();
                this.form.resetPassword().then(() => {
                    console.log("a link was sent to email");
                    this.$router.push({name: 'home'})
                })
            }
        }
    };
</script>
