<template>
    <div class="my-container">
        <div>这是我的页面内容</div>
        <div class="demo2"></div>
        <img :src="demo2"/>
        <a href="javascript:;" @click="toHome">去首页</a>
        <router-view></router-view>
    </div>
</template>
<script>
import demo2 from './img/demo2.png'

export default {
    name: 'My',
    data() {
        return {
            demo2
        }
    },
    methods: {
        toHome() {
            this.$router.push('/home')
        }
    }
}
</script>
<style lang="scss">
.my-container {
    background: yellow;
    .demo2 {
        background: url('./img/demo2.png');
        background-repeat: no-repeat;
        width: 400px;
        height: 400px;
    }
}
</style>