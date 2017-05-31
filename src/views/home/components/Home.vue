<template lang="html">
    <div>
        <div class="banner">
            <div class="banner-sky"></div>
            <img class="banner-stars" src="../../../assets/images/stars.png" alt="CWS">
            <div class="container">
                <div class="banner-desc">
                    <h2>Création de site internet</h2>
                    <div id="line2" class="actor"></div>
                    <p>Spécialisé dans la création de sites internet et le référencement depuis 2014.</p>
                </div>
                <img src="../../../assets/images/banner-bg.svg" alt="CWS">
            </div>
        </div>
        <div class="cards">
            <ul class="container">
                <li>
                    <div class="card">
                        <img src="../../../assets/images/guide.png" alt="Guide">
                        <h3>Développement web</h3>
                        <p>La première étape lorsque nous créons un site internet consiste à rédiger un cahier des charges suffisamment détaillé qui définit la nature du travail à effectuer.</p>
                        <router-link
                                active-class="active"
                                to="/guide/design"
                                exact>Voir plus en detail
                        </router-link>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../../assets/images/component.png" alt="">
                        <h3>Conception</h3>
                        <p>Une étude préalable de votre secteur d'activité permettra de concevoir une identité graphique en accord avec votre domaine d'activité. Vous recevez plusieurs propositions et obtenez un site internet qui vous correspond.</p>
                        <router-link
                                active-class="active"
                                to="/component/layout"
                                exact>Voir plus en detail
                        </router-link>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../../assets/images/resource.png" alt="">
                        <h3>Suivi client</h3>
                        <p>Le travail terminé mène généralement à une collaboration pour les mises à jour, la maintenance ou le suivi. Votre site internet peut toujours évoluer même plusieurs mois après sa mise en ligne.</p>
                        <router-link
                                active-class="active"
                                to="/resource"
                                exact>Voir plus en detail
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script type="text/babel">
    import theaterJS from 'theaterjs';

    export default {
        name: 'Home',

        head: {
            title: {inner: 'Home'}
        },

        mounted() {
            function typing(theater) {
                theater
                        .addScene('professionnels & particuliers', 1800, -29, 800)
                        .addScene('mobile, tablette & desktop', 1800, -26, 800)
                        /**
                        .addScene('Tablette', 1800, -12, 800)
                        .addScene('product managers', 1800, -16, 800)
                        .addScene('FE developers', 1800, -13, 800)
                        **/
                        .addScene((done) => {
                    typing(theater);
                    done();
                });
            }

            let theater = theaterJS({maxSpeed: 100});
            theater.on('type:start, erase:start', function () {
                theater.getCurrentActor().$element.classList.add('typing');
            }).on('type:end, erase:end', function () {
                theater.getCurrentActor().$element.classList.remove('typing');
            });

            theater
                    .addActor('line2', {speed: 1, accuracy: 1})
                    .addScene(2600)
                    .addScene('line2:Pour ', 500).addScene((done) => {
                typing(theater);
                done();
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../../../assets/styles/views/home";
</style>