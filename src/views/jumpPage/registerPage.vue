<template>
    <div class="wrapper">
        <!-- <button>返回上一层</button> -->
        <span>请填写注册信息</span>
        <ul>
            <li>
                <span>账号</span>
                <input v-model="account" />
            </li>
            <li>
                <span>密码</span>
                <input v-model="psd" />
            </li>
            <li>
                <span>确认密码</span>
                <input v-model="confirmpsd"/>
            </li>
            <li>
                <span>生日</span>
                <input v-model="birthdate" />
            </li>
            <li>
                <span>地区</span>
                <input v-model="region" />
            </li>
            <li>
                <el-checkbox v-model="hasChecked"></el-checkbox>
                <button :disabled="!hasChecked" @click="submit">提交</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'registerPage',
    data() {
        return {
            hasChecked: false,
            account: '',
            psd: '',
            confirmpsd: '',
            birthdate: '',
            region: ''
        }
    },
    methods: {
        submit() {
            this.$router.go(-1)
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log('to: \r', to);
        console.log('from: \r', from);
        console.log('next: \r', next);
        next()
    },
    beforeRouteLeave (to, from, next) {
        let { toString } = '----' * 20 
        console.log(Object.getOwnPropertyDescriptors('----' * 20));
        console.log(String(20 * '----'));
        console.log('----' * 20);
        // console.log('to: \r', to);
        // console.log('from: \r', from);
        // console.log('next: \r', next);
        next()
    }
}
</script>
<style lang="less" scoped>
.wrapper {
    width: 100%;
    height: 100%;
}
</style>