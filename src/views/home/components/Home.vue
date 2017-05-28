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
                        <h3>Guide</h3>
                        <p>Understand the design guidelines, helping designers build product that's logically sound,
                            reasonably structured and easy to use.</p>
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
                        <h3>Component</h3>
                        <p>Experience interaction details by strolling through component demos. Use encapsulated code to
                            improve developing efficiency.</p>
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
                        <h3>Resource</h3>
                        <p>Download relevant design resources for shaping page prototype or visual draft, increasing
                            design efficiency.</p>
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
                        .addScene('product designers', 1800, -17, 800)
                        .addScene('UI designers', 1800, -12, 800)
                        .addScene('UX designers', 1800, -12, 800)
                        .addScene('product managers', 1800, -16, 800)
                        .addScene('FE developers', 1800, -13, 800).addScene((done) => {
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
<style lang="scss">
    @import "../../../assets/styles/views/home";
</style>