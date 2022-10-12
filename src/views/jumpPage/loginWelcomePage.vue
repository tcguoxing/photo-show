<template>
    <div calss="wrapper">
        <div header>
            <img>
            <div search>

            </div>
            <div userInfo>
                <img home />
                <img nav />
                <img create />
                <img compass />
                <img favorite />
                <img mine />
            </div>
        </div>
        <div body>

        </div>
    </div>
</template>
<script>
export default {
    name: 'welcomePage',
    data() {
        return {}
    },
    computed: {
        name() {
            return this.$route.query.id
        }
    },
    methods: {
        returnBack() {
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less" scoped>
    .wrapper {
        width: 100%;
        height: 100%;
        background: gray;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div[header] {
        width: 100%;
        height: 8%;
        background: white;
        display: flex;
    }
</style>
