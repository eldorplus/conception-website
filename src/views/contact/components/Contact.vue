<template lang="html">
    <div class="page-container page-contact">
        <h2>Contact</h2>
        <p>Présentez votre projet en utilisant le formulaire de contact ou en adressant votre demande par mail à <a href="mailto:eldorplus@gmail.com">eldorplus@gmail.com</a>.</p>
        <div class="form">
            <div class="container">
                <form class="form-contact">

                </form>
            </div>
        </div>
    </div>
</template>


<script type="text/babel">

    export default {
        name: 'Contact',

        head: {
            title: {inner: 'Contact'}
        },

        mounted() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../../../assets/styles/views/contact";
</style>