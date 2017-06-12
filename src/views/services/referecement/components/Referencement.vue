<template lang="html">
    <div class="seo-referencement-naturel-site-internet">
        <section class="light-wrapper page-title">
            <div class="inner">
                <h2 class="animated lightSpeedIn">SEO Référencement naturel de site internet</h2>
            </div>
        </section>

        <div class="light-wrapper">
            <div class="inner">
                <div class="section-title text-center">
                    <h2 class="animated bounceInLeft">Référencer un site</h2>
                    <span class="icon"><i class="icon-setting"></i></span>
                </div>
                <div class="col-services">
                    <Row>
                        <Column :sm="4" class="animated fadeInLeft">
                            <div class="icon"><i class="icon-picons-laptop-web icn"></i></div>
                            <div class="text">
                                <h5 class="upper">Structure.</h5>
                                <p>Un site web réalisé simplement doit être agréable à l'oeil, facile d'utilisation et
                                    aisément maintenable.</p>
                            </div>
                        </Column>
                        <Column :sm="4" class="animated fadeInUp">
                            <div class="icon"><i class="icon-picons-anchor icn"></i></div>
                            <div class="text">
                                <h5 class="upper">Sémantique</h5>
                                <p>Si vous ne l'aimez pas, qui l'aimera? Le site doit refleter votre personnalité, celle
                                    de votre entreprise: c'est votre vitrine sur le web.</p>
                            </div>
                        </Column>
                        <Column :sm="4" class="animated fadeInRight">
                            <div class="icon"><i class="icon-picons-chain icn"></i></div>
                            <div class="text">
                                <h5 class="upper">Liens</h5>
                                <p>De nos jours et pour le futur, il est indispensable d'avoir un site web s'adaptant
                                    aux écrans des smartphones et des tablettes.</p>
                            </div>
                        </Column>
                    </Row>
                </div>
            </div>
        </div>
        <div class="black-wrapper">
            <div class="inner">
                <div class="section-title text-center">
                    <h2 class="animated bounceInLeft">deux exemples parlants</h2>
                    <span class="icon"><i class="icon-picons-preferences"></i></span>
                    <p class="droite-a-gauche animated bounceInRight">Quoi de plus parlant qu'un bon exemple ?</p>
                </div>
                <div class="col-services">
                    <Row>
                        <Column :sm="4" class="animated fadeInLeft">
                            <div class="icon"><i class="icon-picons-chain icn"></i></div>
                            <div class="text"><h5 class="upper">Choix des mots-clés.</h5>
                                <p>La page d'accueil de CWS se positionne en première position en SEO
                                    (décembre 2015) sur l'expression clé : "conception site internet".<br><br> Les
                                    <strong>annonces payantes</strong> sont signalées par le terme "Annonce" sur fond
                                    orange.<br> Elles sont d'emblée placées par le moteur de recherche, Google en
                                    l'occurence, aux 3 premières positions, contre rémunération. <br>C'est ce que l'on
                                    nomme des annonces sponsorisées.</p></div>
                        </Column>
                        <Column :sm="8">
                            <figure class="animated pulse"><img
                                    src="/static/images/seo.png"
                                    alt=""></figure>
                        </Column>
                    </Row>
                    <div class="divide-30"></div>
                    <Row>
                        <Column :sm="8">
                            <figure class="animated pulse"><img
                                    src="/static/images/seo.png"
                                    alt=""></figure>
                        </Column>
                        <Column :sm="4" class="animated fadeInRight">
                            <div class="icon"><i class="icon-picons-chain icn"></i></div>
                            <div class="text"><h5 class="upper"></h5>
                                <p>La même page d'accueil se positionne en cinquième position naturelle sur une
                                    expression bien plus concurrentielle : "création site web".<br> On constate par cet
                                    exemple l'importance du choix des mots clés sur lesquels porter l'effort de
                                    référencement. </p></div>
                        </Column>
                    </Row>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">

    export default {
        name: 'Website',

        head: {
            title: {inner: 'SEO Référencement naturel de site internet'}
        },

        mounted() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../../../../assets/styles/views/services";
</style>