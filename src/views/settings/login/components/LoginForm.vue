<template lang="html">
    <form @submit.prevent="login" @keydown="form.errors.clear($event.target.name)">
        <alert-error :form="form"/>
        <div class="form-group" :class="{ 'has-error': form.errors.has('email') }">
            <input v-model="form.email"
                   type="text"
                   name="email"
                   id="username"
                   tabindex="1"
                   required
                   autocomplete="off"
                   placeholder="Email"
                   class="form-control">
            <has-error :form="form" field="email"></has-error>
        </div>
        <div class="form-group" :class="{ 'has-error': form.errors.has('password') }">
            <input type="password"
                   class="form-control"
                   id="password" v-model="form.password"
                   placeholder="Mot de passe"
                   autocomplete="off"
                   pattern=".{6,}"
                   required
                   tabindex="2">
            <span class="hideShowPassword-toggle"></span>
            <has-error :form="form" field="password"></has-error>
        </div>

        <div class="form-group row login-tools">
            <div class="col-xs-6 login-remember">
                <div class="checkbox">
                    <label for="remember" class="be-checks">
                        <input v-model="form.remember_me" type="checkbox" name="remember_me" id="remember">
                        <i class="remember"></i>Se souvenir de moi</label>
                </div>
            </div>
            <div class="col-xs-6 login-forgot-password">
                <router-link :to="{ name: 'password-reset', exact: true }" class="btn btn-link">Mot de passe oublié ?</router-link>
            </div>
        </div>
        <div class="form-group login-submit">
            <md-button size="normal" type="primary" nativeType="submit">Se connecter</md-button>
        </div>
    </form>
</template>

<script type="text/babel">
    import { Form } from '@/components/Form'
    import Login from '@/mixins/login'

    export default {
        name: 'login-form',

        mixins: [Login],

        data() {
            return {
                form: new Form({
                    email: '',
                    password: '',
                    remember_me: false
                })
            }
        }
    }
</script>