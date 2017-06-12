<template lang="html">
    <div class="side-nav">
        <ul class="nav">
            <li class="nav-item">
                <router-link :to="{ name: 'creation-site-internet', exact: true }">&nbsp;Création de site internet</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'seo-referencement-naturel-site-internet', exact: true }">&nbsp;Référencement naturel SEO</router-link>
            </li>
        </ul>
    </div>
</template>
<script type="text/babel">

    export default {
        name: 'MenuServices'
    }
</script>
