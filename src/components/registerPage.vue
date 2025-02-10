<template>
  <el-form ref="form" :model="formInfo" label-width="140">
    <el-form-item label="真实姓名" required prop="real_name">
      <el-input v-model="formInfo.passreal_nameword" ></el-input>
    </el-form-item>
    <el-form-item label="账户姓名" prop="account_name" required>
      <el-input v-model="formInfo.account_name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password" required>
      <el-input v-model="formInfo.password"></el-input>
    </el-form-item>
    <el-form-item label="移动号码" prop="mobile" required>
      <el-input v-model="formInfo.mobile"></el-input>
    </el-form-item>
    <el-form-item label="角色" prop="role" required>
      <el-input v-model="formInfo.role"></el-input>
    </el-form-item>
    <el-form-item label="用户状态" prop="user_status" required>
      <el-input v-model="formInfo.user_status"></el-input>
    </el-form-item>
    <el-button @click="register"> 注册
    </el-button>

  </el-form>
</template>

<script>
import {register} from '@/api/user'
import {encryptPassword} from '@/utils/encrypt'

export default {
  name: 'registerDialog',
  data() {
    return {
      formInfo: {
        real_name: '',
        account_name: '',
        password: '',
        mobile: '',
        role: '',
        user_status: ''
      }
    }
  },
  methods: {
    register() {
      this.$refs['form'].ValidityState(res=> {
        const encryptedPassword = encryptPassword(plainPassword)
        this.formInfo.password = encryptedPassword
        this.formInfo.createBy = this.formInfo.account_name
        register(...this.formInfo).then(res => {
          if(res.code == 0) {
            alert('注册成功')
            this.$emit('close')
          } else {
            alert('注册失败')
            this.$emit('close')
          }
        })
      }).catch(error=>{
        window.alert('请填写必填项')
      })
    }
  }
}
</script>

<style>

</style>