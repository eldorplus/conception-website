<template lang="html">
    <div class="creation-site-internet">
        <section class="light-wrapper page-title">
            <div class="inner">
                <h2 class="animated lightSpeedIn">Création de site internet</h2>
            </div>
        </section>

        <div class="light-wrapper">
            <div class="inner">
                <div class="section-title text-center">
                    <h2 class="animated bounceInLeft">Créer un site</h2>
                    <span class="icon"><i class="icon-setting"></i></span>
                </div>
                <div class="col-services">
                    <Row>
                        <Column :sm="4" class="animated fadeInLeft">
                            <div class="icon"> <i class="icon-star-on icn"></i> </div>
                            <div class="text">
                                <h5 class="upper">Simple et fonctionnel.</h5>
                                <p>Un site web réalisé simplement doit être agréable à l'oeil, facile d'utilisation et aisément maintenable.</p>
                            </div>
                        </Column>
                        <Column :sm="4" class="animated fadeInUp">
                            <div class="icon"> <i class="icons-fork-knife icn"></i> </div>
                            <div class="text">
                                <h5 class="upper">Un site à votre goût.</h5>
                                <p>Si vous ne l'aimez pas, qui l'aimera? Le site doit refleter votre personnalité, celle de votre entreprise: c'est votre vitrine sur le web.</p>
                            </div>
                        </Column>
                        <Column :sm="4" class="animated fadeInRight">
                            <div class="icon"> <i class="icons-ipod icn"></i> </div>
                            <div class="text">
                                <h5 class="upper">Web Mobile.</h5>
                                <p>De nos jours et pour le futur, il est indispensable d'avoir un site web s'adaptant aux écrans des smartphones et des tablettes.</p>
                            </div>
                        </Column>
                    </Row>
                    <div class="divide-30"></div>
                    <Row>
                        <Column :sm="4" class="animated fadeInLeft">
                            <div class="icon"> <i class="icons-computer-imac icn"></i> </div>
                            <div class="text">
                                <h5 class="upper">MODERNE</h5>
                                <p>Développé selon les standards actuels du web : HTML5, CSS3, JavaScript, Ajax... et respectant les normes SEO.</p>
                            </div>
                        </Column>

                        <Column :sm="4" class="animated fadeInUp">
                            <div class="icon"> <i class="icons-contact-book icn"></i> </div>
                            <div class="text">
                                <h5 class="upper">Référencement naturel SEO</h5>
                                <p>La structure de votre site doit être optimisée pour le référencement naturel: il doit répondre aux critères de classification des moteurs de recherche tel Google.</p>
                            </div>
                        </Column>
                        <Column :sm="4" class="animated fadeInRight">
                            <div class="icon"> <i class="icons-script icn"></i> </div>
                            <div class="text">
                                <h5 class="upper">Distinction</h5>
                                <p>Votre site doit vous permettre de donner la meilleure image de vous, il doit vous faire devancer la concurrence.</p>
                            </div>
                        </Column>
                    </Row>
                </div>
            </div>
            <div class="inner">
                <div class="section-title text-center">
                    <h2 class="animated bounceInLeft">Tarifs de création de site internet</h2>
                    <span class="icon"><i class="icon-setting"></i></span>
                </div>
                <div class="col-services">
                    <Row>
                        <Column :sm="4" class="animated fadeInLeft">
                            <div class="image">
                                <img src="/static/images/site-vitrine.jpg" alt="creation-site-vitrine">
                            </div>
                        </Column>
                        <Column :sm="8" class="animated fadeInUp">
                            <div class="text">
                                <h5 class="upper">Présentez votre activité et assurez votre visibilité</h5>
                                <p class="lead">Un site vitrine a pour objectif de présenter votre activité et de vous assurer une visibilité sur le net. Un site de qualité, bien référencé et facile à utiliser vous amènera un nombre croissant de visiteurs et vous permettra de développer votre clientèle et votre activité.</p>
                            </div>
                            <div class="text">
                                <h5 class="upper">Un site internet qui évolue</h5>
                                <p class="lead">Vous pouvez demander à pouvoir administrer le site par vous même pour ajouter du contenu de manière libre. Vous disposerez d’une administration simple et pourrez être guidé dans sa prise en main pour acquérir de l’autonomie.</p>
                                <p class="lead">Vous pouvez aussi demander à disposer d’un outil de statistique évolué&nbsp;fournissant des informations&nbsp;précises et en temps réel sur le trafic, sa source et son importance.</p>
                            </div>
                        </Column>
                    </Row>
                    <div class="color-box bg-blue-light">
                        <div class="icon"><i class="icon-information"></i></div>
                        <div class="message-box-text">
                            <p>Les tarifs suivants sont donnés à titre indicatif.&nbsp;<router-link :to="{ name: 'contact', exact: true }">Formulez votre demande</router-link>&nbsp;pour obtenir une estimation du prix réel de votre projet.</p>
                        </div>
                    </div>
                    <div class="divide-20"></div>
                    <Row>
                        <Column :sm="4" class="animated fadeInLeft">
                            <PriceBox title="Formule « basique »">
                                <div slot="header">
                                    <p class="price">
                                        <sup>€</sup>
                                        <span>750</span>
                                        <sub>/HT.</sub>
                                    </p>
                                    <p class="hint">Pour les petits budgets</p>
                                </div>
                                <div slot="body">
                                    <ul class="features">
                                        <li><span class="fontawesome-cog"></span><strong>5 pages de contact</strong></li>
                                        <li><span class="fontawesome-star"></span>Nom de domaine</li>
                                        <li><span class="fontawesome-star"></span>Design responsive</li>
                                        <li><span class="fontawesome-star"></span>Optimisation SEO</li>
                                        <li><span class="fontawesome-dashboard"></span>Formulaire de contact</li>
                                        <li><span class="fontawesome-cloud"></span>Carte de localisation</li>
                                    </ul>
                                </div>
                                <p slot="footer"><router-link :to="{name: 'contact'}" exact>Obtenir mon site VITRINE</router-link></p>
                            </PriceBox>
                        </Column>
                        <Column :sm="4" class="animated fadeInUp">
                            <PriceBox title="Formule « visibilité »" type="professional">
                                <div slot="header">
                                    <p class="price">
                                        <sup>€</sup>
                                        <span>1250</span>
                                        <sub>/HT.</sub>
                                    </p>
                                    <p class="hint">Présence</p>
                                </div>
                                <div slot="body">
                                    <ul class="features">
                                        <li><span class="fontawesome-cog"></span><strong>10 pages de contact</strong></li>
                                        <li><span class="fontawesome-star"></span>Nom de domaine</li>
                                        <li><span class="fontawesome-dashboard"></span>Design responsive</li>
                                        <li><span class="fontawesome-dashboard"></span>Optimisation SEO</li>
                                        <li><span class="fontawesome-dashboard"></span>Optimisation serveur</li>
                                        <li><span class="fontawesome-cloud"></span>Visibilité google map</li>
                                        <li><span class="fontawesome-cloud"></span><strong>Référencement naturel</strong></li>
                                    </ul>
                                </div>
                                <p slot="footer">
                                    <router-link :to="{name: 'contact'}" exact>Obtenir mon site PREMIUM</router-link>
                                </p>
                            </PriceBox>
                        </Column>

                        <Column :sm="4" class="animated fadeInUp">
                            <PriceBox title="Formule « premium »" type="business">
                                <div slot="header">
                                    <p class="price">
                                        <sup>€</sup>
                                        <span>2500</span>
                                        <sub>/HT.</sub>
                                    </p>
                                    <p class="hint">Pour les petits budgets</p>
                                </div>
                                <div slot="body">
                                    <ul class="features">
                                        <li><span class="fontawesome-cog"></span><strong>25 pages de contact</strong></li>
                                        <li><span class="fontawesome-star"></span>Nom de domaine</li>
                                        <li><span class="fontawesome-dashboard"></span>Design responsive</li>
                                        <li><span class="fontawesome-cloud"></span>Optimisation SEO</li>
                                        <li><span class="fontawesome-cloud"></span>Optimisation serveur</li>
                                        <li><span class="fontawesome-cloud"></span>Visibilité google map</li>
                                        <li><span class="fontawesome-cloud"></span><strong>Référencement premium</strong></li>
                                    </ul>
                                </div>
                                <p slot="footer">
                                    <router-link :to="{name: 'contact'}" exact>Obtenir mon site PREMIUM</router-link>
                                </p>
                            </PriceBox>
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
            title: {inner: 'Création de site internet'}
        },

        mounted() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../../../../assets/styles/views/website";
</style>