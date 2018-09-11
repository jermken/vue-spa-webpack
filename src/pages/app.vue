<template>
    <div>
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
            a: '21324'
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
</style>
