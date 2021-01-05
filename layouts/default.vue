<template>
  <div>
    <navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
export default {
  components: {
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
  font-size: 62.5%;
  background-color: $dark-blue;
  color: #c4c4c4;
  transition: background-color 0.5s ease-in, color 0.5s ease-in;

  @media only screen and (max-width: $bp-large) {
    font-size: 50%;
  }

  @media only screen and (max-width: $bp-small) {
    font-size: 50%;
  }
}

@media (prefers-color-scheme: light) {
  html {
    background-color: $light-white;
    color: $dark-blue;

    & .blue-background {
      color: $light-white;
    }

    & .radient-background {
      color: $light-white;

      & .black-background {
        background-color: $light-white;
        color: $dark-blue;
      }
    }

    & .bottom-row__item {
      color: $dark-blue !important;
    }
  }
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

ul {
  font-size: 1.6rem;
}

.light-pink {
  color: $light-pink;
}

.blue-background {
  background-color: $light-blue;
  margin: 3rem 0;
  padding: 5rem 15rem;
}

.lighter {
  font-weight: lighter;
  letter-spacing: 2px;
}
</style>
