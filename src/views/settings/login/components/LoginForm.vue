<template lang="html">
    <form @submit.prevent="login" @keydown="form.errors.clear($event.target.name)" class="login-tabs">
        <alert-error :form="form"/>
        <div class="login-tabs-container">
            <div class="login-email" :class="{ 'has-error': form.errors.has('email') }">
                <MdInput v-model="form.email"
                         type="text"
                         auto-complete="on"
                         placeholder="Email"/>
                <has-error :form="form" field="email"></has-error>
            </div>
            <div class="login-password" :class="{ 'has-error': form.errors.has('password') }">
                <MdInput type="password"
                         v-model="form.password"
                         placeholder="Mot de passe"
                         auto-complete="off"
                         pattern=".{6,}"
                         required/>
                <span class="show-password-toggle"></span>
                <has-error :form="form" field="password"></has-error>
            </div>

            <div class="login-forgot-password">
                <router-link :to="{ name: 'password-reset', exact: true }" class="btn btn-link">Mot de passe oublié ?
                </router-link>
            </div>


            <div class="login-tools">
                <div class="login-submit">
                    <MdButton size="normal" type="primary" nativeType="submit">Se connecter</MdButton>
                </div>
            </div>
        </div>





    </form>
</template>

<script type="text/babel">
    import {Form} from '@/components/Form'
    import Login from '@/mixins/login'

    export default {
        name: 'login-form',

        mixins: [Login],

        data() {
            return {
                form: new Form({
                    email: '',
                    password: ''
                })
            }
        }
    }
</script>