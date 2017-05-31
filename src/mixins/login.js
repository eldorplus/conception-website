import { mapActions } from 'vuex';
//import { Database } from '../services/Firebase';

export default {
    data() {
        return {
            redirect: this.$route.query.redirect
        }
    },
    methods: {
        login() {
            this.form.login().then((user) => {
                //let userProfile = Database('/userProfile').child(user.uid);
                //console.log(userProfile);
                this.setUserAuth(user);

                this.form.email = '';
                this.form.password = '';
                this.form.remember_me = false;

                if (this.redirect !== undefined) {
                    this.$router.push(this.redirect)
                }
            }).catch(error => console.log(error, 'error submit'))
        },
        ...mapActions(['setUserAuth'])
    }
}