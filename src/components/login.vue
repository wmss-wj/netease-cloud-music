<template>
  <div id="login-view">
    <div class="logo">
      <i class="iconfont icon-netease-cloud-music-logo"></i>
    </div>
    <div v-if="show" class="container">
      <div class="btns">
        <button class="login-phone" @click="show = false">手机号登录</button>
        <br />
        <button class="use-now" @click="()=>{this.$store.commit('touristLogin')}">立即使用</button>
      </div>
    </div>
    <div v-else class="login">
      <div class="back" @click="show = true">
        <i class="iconfont icon-back"></i>
      </div>
      <form>
        <input type="phone" v-model.trim="phone" placeholder="手机号">
        <br>
        <input type="password" v-model.trim="pwd" placeholder="密码">
      </form>
      <button class="login-btn" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  name: 'login',
  data () {
    return {
      show: true,
      phone: null,
      pwd: null
    }
  },
  methods: {
    login () {
      if (!this.phone && !this.phone) return
      login(this.phone, this.pwd).then(function (res) {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/login.scss';
</style>
