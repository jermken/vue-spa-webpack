<template>
    <div>
        <div>我的页面子组件2</div>
        <a href="javascript:;" @click="tochild2">前往我的页面子组件1</a>
    </div>
</template>
<script>
export default {
    name: 'myChild2',
    methods: {
        tochild2() {
            this.$router.push('/my/mychild1')
        }
    }
}
</script>