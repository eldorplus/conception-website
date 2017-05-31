<template lang="html">
    <div class="list-group">
        <div class="list-group-item active">
            <span class="menu-heading" style="color: #fff;">Paramètres personnels</span>
        </div>
        <div class="list-group-item">
            <!-- SIDEBAR MENU -->
            <div class="profile-usermenu">
                <ul class="nav">
                    <li>
                        <router-link :to="{ name: 'creation-site-internet', exact: true }"><!--<icon name="cog" />-->&nbsp;Création de site internet</router-link>
                    </li>
                </ul>
                <!-- END MENU -->
            </div><!--list-group-item-->
        </div> <!-- List-group-->
    </div><!-- col-md-3 -->
</template>
<script type="text/babel">

    export default {
        name: 'MenuServices'
    }
</script>
