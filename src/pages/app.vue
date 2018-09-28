<template>
    <div>
        <img src="../img/demo1.png"/>
        <div class="title">{{msg}}</div>
        <router-link to="/home">首页</router-link>
        <router-link to="/my">我的</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            msg: 'this is a vue unit test demo'
        }
    },
    mounted() {
        console.log(12121211)
    }
}
</script>
<style lang="scss">

.container {
    .txt {
        color: yellow;
    }
}
.demo1 {
    background: url('../img/demo1.png');
    width: 200px;
    height: 200px;
}
</style>
