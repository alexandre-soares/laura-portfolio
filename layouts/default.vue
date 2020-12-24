<template>
  <div>
    <light-dark-btn class="switch-mode-btn" />
    <Nuxt />
  </div>
</template>

<script>
import LightDarkBtn from '../components/layout/LightDarkBtn.vue'
export default {
  components: {
    LightDarkBtn,
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.switch-mode-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 999;
}
</style>
