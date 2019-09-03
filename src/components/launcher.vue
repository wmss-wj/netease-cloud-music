<template>
<transition name='fade'>
  <div class="launcher del" v-if="show">
    <img class="slogan" src="/images/slogan.png" />
    <br />
    <img class="logo1" src="/images/logo1.png" />
  </div>
</transition>
</template>

<script>
export default {
  name: 'launcher',
  data () {
    return {
      show: true
    }
  },
  mounted () {
    this.show = false
  }
}
</script>

<style scoped>
.launcher {
  position: fixed;
  top: 0;
}
.fade-enter-active ,
.fade-leave-active {
  transition: opacity .5s ease-in-out;
}
.fade-enter ,
.fade-leave-to {
  opacity: 0;
}

</style>
