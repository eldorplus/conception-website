<template lang="html">
    <footer class="footer">
        <div class="container">
            <div class="footer-main">
                <p class="footer-main-title">Développez par Patrick LUZOLO</p>
                <a href="mailto:eldorplus@gmail.com" class="footer-main-link">Feedback</a>
            </div>
            <div class="footer-social">
                <Popover ref="weixin"
                        placement="top"
                        width="120"
                        popper-class="footer-popover"
                        trigger="hover">
                    <div class="footer-popover-title">Eldorplus UED</div>
                    <img src="../../assets/images/qrcode.png" alt="">
                </Popover>
                <i class="icon-weixin element" v-popover:weixin></i>
                <a href="//github.com/eldorplus" rel="noopener noreferrer" target="_blank">
                    <i class="icon-github element"></i>
                </a>
            </div>
        </div>
    </footer>
</template>

<script type="text/babel">

    export default {
        name: 'Footer'
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/components/footer';
</style>