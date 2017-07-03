<template lang="html">
    <div class="page-container page-contact">
        <section class="light-wrapper page-title">
            <div class="inner">
                <h1 class="animated lightSpeedIn">Soyons en contact</h1>
            </div>
        </section>
        <section class="light-wrapper">
            <div class="inner">
                <Row>
                    <Column :sm="8" class="animated fadeInLeft">
                        <h2 class="post-title animated bounceInLeft">Laissez moi quelques mots!</h2>
                        <p>Pour toute question, ou demande de devis, demande d'audit, ou simple information, laissez-moi
                            un message, je vous répondrai très rapidement.</p>
                        <div class="divide-20"></div>
                        <form @submit.prevent="submit" @keydown="form.errors.clear($event.target.name)" class="forms">
                            <alert-error :form="form"/>
                            <div class="container">
                                <div class="form-name" :class="{ 'has-error': form.errors.has('name') }">
                                    <MdInput v-model="form.name"
                                             type="text"
                                             auto-complete="on"
                                             placeholder="Nom"
                                             required/>
                                    <has-error :form="form" field="name"></has-error>
                                </div>

                                <div class="form-email" :class="{ 'has-error': form.errors.has('email') }">
                                    <MdInput v-model="form.email"
                                             type="text"
                                             auto-complete="on"
                                             placeholder="Email"
                                             required/>
                                    <has-error :form="form" field="email"></has-error>
                                </div>

                                <div class="form-telephone" :class="{ 'has-error': form.errors.has('telephone') }">
                                    <MdInput v-model="form.telephone"
                                             type="text"
                                             mask="###.###.####"
                                             auto-complete="on"
                                             placeholder="Téléphone"/>
                                    <has-error :form="form" field="telephone"></has-error>
                                </div>

                                <div class="form-message" :class="{ 'has-error': form.errors.has('message') }">
                                    <MdInput type="textarea"
                                             v-model="form.message"
                                             placeholder="Message"
                                             auto-complete="off"
                                             size="large"
                                             required/>
                                    <has-error :form="form" field="message"></has-error>
                                </div>

                                <div class="form-group" :class="{ 'has-error': form.errors.has('devis') }">
                                    <!-- Je suis intéressé(e) par :
                                    <el-select v-model="value" placeholder="Select">
                                        <option selected="" value="sans">-----------</option>
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                    <has-error :form="form" field="devis"></has-error>-->
                                </div>

                                <div class="form-group" :class="{ 'has-error': form.errors.has('recaptcha_response') }">
                                    <recaptcha ref="recaptcha"
                                               :sitekey="siteKey"
                                               @verify="onVerify"
                                               @expired="onExpired" v-model="form.recaptcha_response"/>
                                    <has-error :form="form" field="recaptcha_response"></has-error>
                                </div>


                                <MdButton size="normal" type="primary" nativeType="submit" @click="submit">Envoyer
                                </MdButton>
                            </div>
                        </form>
                    </Column>
                    <Column :sm="4" class="animated fadeInRight">
                        <div class="sidebox widget">
                            <h4>Détails</h4>
                            <p>Conception Web Site est disponible pour vous écouter, répondre à vos interrogations, vous
                                préparer un devis, vous assister. </p>
                            <ul class="contact-info">
                                <li>
                                    <i class="icon-location"></i>
                                    <p><span><strong>Patrick LUZOLO</strong></span></p>
                                    <p class="address">
                                        <span>8 Avenue Paul Verlaine,<br>94190 Villeneuve Saint-Georges</span></p>
                                </li>
                                <li><i class="icon-phone"></i>
                                    <p>07 78 37 40 59</p></li>
                                <li><i class="icon-s-skype"></i>
                                    <p><a href="skype:eldorplus">Skype id: eldorplus</a></p></li>
                            </ul>
                        </div><!-- /col -->
                    </Column>
                </Row>
            </div>
        </section>
    </div>
</template>


<script type="text/babel">
    import {Form} from '@/components/Form';
    import {Database} from '@/services/Firebase';
    import reCAPTCHA from '@/mixins/reCAPTCHA';
    import Recaptcha from '@/plugins/Recaptcha';
    
    export default {
        name: 'Contact',

        components: {Recaptcha},

        mixins: [reCAPTCHA],

        head: {
            title: {
                inner: 'Contact'
            },
            script: [
                {
                    type: 'text/javascript',
                    src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
                    async: true,
                    body: true,
                    defer: true
                }
            ]
        },

        computed: {
            siteKey() {
                return '6LexaSQUAAAAALfc5jNpwx_S4REk_Whi-vPcI_os'
            }
        },

        data() {
            return {
                options: [{
                    value: 'devis',
                    label: 'un devis personnalisé'
                }, {
                    value: 'formule-basic',
                    label: 'une formule Basic'
                }, {
                    value: 'formule-medium',
                    label: 'une formule Premium'
                }, {
                    value: 'formule-e-boutique',
                    label: 'une formule E-boutique'
                }, {
                    value: 'one-page',
                    label: 'un site One Page'
                }, {
                    value: 'forfait-basic',
                    label: 'un forfait Basic'
                }, {
                    value: 'forfait-medium',
                    label: 'un forfait Premium'
                }, {
                    value: 'forfait-e-boutique',
                    label: 'un forfait E-boutique'
                }],
                form: new Form({
                    name: '',
                    email: '',
                    telephone: '',
                    message: '',
                    devis: '',
                    read: false,
                    recaptcha_response: ''
                })
            }
        },

        methods: {
            submit() {
                this.form.clear();
                if (this.validate()) {
                    let contact = Database('contact');
                    let data = this.form.data();
                    delete data['recaptcha_response'];
                    contact.push(data).then(() => {
                        this.form.name = '';
                        this.form.email = '';
                        this.form.message = '';
                        this.form.telephone = '';
                        this.form.recaptcha_response = '';
                        this.$notify({
                            title: 'Success',
                            message: 'Votre message a été envoyé avec succès',
                            type: 'success'
                        });
                    }).catch(console.error)
                }

            },

            validate() {
                let errors = {};

                if (
                        this.form.name === '' &&
                        this.form.email === '' &&
                        this.form.message === '' &&
                        this.form.recaptcha_response === ''
                ) {
                    errors = {
                        name: 'Le nom est requis',
                        email: 'L\'email est requis',
                        message: 'Formulez votre message de demande dans ce champ',
                        recaptcha_response: 'Le champ \'Je ne suis pas un robot\' est  requis.'
                    };
                    this.form.errors.set(errors);
                    return false;
                }
                if (this.form.name.length < 3) {
                    errors['name'] = 'Le nom doit contenir au moins 3 caractères';
                }
                let email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!email.test(this.form.email)) {
                    errors['email'] = 'L\'email est required';
                }
                let telephone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

                if (this.form.telephone !== '' && !telephone.test(this.form.telephone)) {
                    errors['telephone'] = 'Vous devez entre un numero de telephone valide';
                }

                if (this.form.message.length < 25) {
                    errors['message'] = 'Votre message doit contenit au moins 25 caractères';
                }

                if (this.form.recaptcha_response === '') {
                    errors['message'] = 'Le champ \'Je ne suis pas un robot\' n\'est pas valide.';
                }

                if (Object.keys(errors).length > 0) {
                    this.form.errors.set(errors);
                    return false;
                }

                return true;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../../../assets/styles/views/contact";
</style>