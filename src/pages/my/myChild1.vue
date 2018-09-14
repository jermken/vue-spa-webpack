<template>
    <div>
        <div>我的页面子组件1</div>
        <a href="javascript:;" @click="tochild1">前往我的页面子组件2</a>
    </div>
</template>
<script>
export default {
    name: 'myChild1',
    methods: {
        tochild1() {
            this.$router.push('/my/mychild2')
        }
    }
}
</script>