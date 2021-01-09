<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/layout/Footer.vue'
import Navbar from '../components/layout/Navbar.vue'
export default {
  components: {
    Navbar,
    Footer,
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
  color: $light-grey;
  overflow-x: hidden;
  transition: background-color 0.5s ease-in, color 0.5s ease-in;

  @media only screen and (max-width: $bp-large) {
    font-size: 60%;
  }

  @media (prefers-color-scheme: light) {
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
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: $light-pink;
  transition: 0.3s ease-in;

  &:hover {
    color: $dark-pink;
  }
}

.btn {
  padding: 1rem 2rem;
  border-radius: 3rem;
  font-family: 'Baskerville', sans-serif;
  font-size: 1.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: lighter;
  border: none;
  cursor: pointer;
  background-color: $light-pink;
  color: $light-white;
  transition: all 0.3s ease-in;

  & a {
    text-decoration: none !important;
    transition: 0.3s ease-in;
  }

  &:hover {
    background-color: $dark-pink;
    color: $light-white;
  }

  &:active {
    transform: translateY(1rem);
  }
}
</style>
