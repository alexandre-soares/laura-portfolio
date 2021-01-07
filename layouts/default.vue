<template>
  <div>
    <navbar />
    <transition name="fade" mode="out-in" appear>
      <Nuxt />
    </transition>
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
  overflow-x: hidden;
  transition: background-color 0.5s ease-in, color 0.5s ease-in;

  @media only screen and (max-width: $bp-large) {
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
  overflow-x: hidden;
}

ul,
ol {
  font-size: 1.7rem;
  line-height: 2.5rem;
  text-align: justify;
  margin: 1rem 0;
  letter-spacing: 0.7px;
}

.light-pink {
  color: $light-pink;
}

.blue-background {
  background-color: $light-blue;
  margin: 3rem 0;
  padding: 5rem 15rem;

  @media only screen and (max-width: $bp-small) {
    padding: 2rem 3rem;
  }
}

.lighter {
  font-weight: lighter;
  letter-spacing: 2px;
}

.stronger {
  font-weight: bolder;
  letter-spacing: 2px;
}

.radient-background {
  background: rgba(100, 15, 137, 0.8);
  background: linear-gradient(
    48deg,
    rgba(100, 15, 137, 0.8) 0%,
    rgba(63, 36, 139, 0.8) 59%,
    rgba(35, 51, 128, 0.8) 100%
  );
  padding: 4rem 0;

  & p {
    margin: 3rem 0 !important;
  }

  & .black-background {
    background-color: $dark-blue;
    padding: 2rem 0;
  }
}

.pain-point-h4 {
  margin: 3rem 0;
  font-size: 1.9rem;
  line-height: 3rem;
  text-transform: uppercase;
}

.page-content {
  &__title {
    font-family: 'Baskerville', sans-serif;
    font-size: 2.4rem;
    letter-spacing: 1px;
    text-align: left;
    margin: 4rem 0;
    align-self: start;
    text-transform: uppercase;
    font-weight: 400;

    @media only screen and (max-width: $bp-small) {
      text-align: center;
    }
  }
}

.situation {
  color: $light-pink;
}

.motivation {
  color: #948fe2;
}

.outcome {
  color: #97da7b;
}
</style>
