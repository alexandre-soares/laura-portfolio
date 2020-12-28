<template>
  <div>
    <light-dark-btn class="switch-mode-btn" />
    <Nuxt />
    <navbar />
  </div>
</template>

<script>
import LightDarkBtn from '../components/layout/LightDarkBtn.vue'
import Navbar from '../components/layout/Navbar.vue'
export default {
  components: {
    LightDarkBtn,
    Navbar,
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-size: 62.5% !important;
  background-color: $dark-blue;
  color: #c4c4c4;
  transition: background-color 0.5s ease-in, color 0.5s ease-in;
}

html.light {
  background-color: $light-white;
  color: $dark-blue;
}

body {
  font-family: 'Gill Sans', sans-serif;
}

.switch-mode-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 999;
}
</style>
