<template>
  <div class="navbar" :class="backgroundNav ? 'navbar__background' : ''">
    <nuxt-link to="/" tag="div" class="navbar__logo">
      <img src="@/static/img/icons/logo white.svg" alt="logo" />
    </nuxt-link>
    <nuxt-link tag="div" to="/" class="navbar__brand">
      <span>Laura SIBILLE - UX Designer</span>
    </nuxt-link>
    <div class="navbar__contact">
      <a href="https://www.behance.net/laurasibil2c3c" target="_blank">
        <img src="@/static/img/icons/behance.svg" alt="behance" />
      </a>
      <a href="https://dribbble.com/LauraSibille" target="_blank">
        <img src="@/static/img/icons/dribbble.svg" alt="dribbble" />
      </a>
      <a href="https://www.linkedin.com/in/laura-sibille/" target="_blank">
        <img src="@/static/img/icons/linkedin.svg" alt="linkedin" />
      </a>
    </div>
    <div class="navbar__email">
      <a href="mailto:laura.sibille@gmail.com" class="btn">
        <span>Contact</span>
        <img src="@/static/img/icons/message.svg" alt="email" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundNav: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        this.backgroundNav = true
      } else {
        this.backgroundNav = false
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  z-index: 998;
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: $bp-small) {
    padding: 1rem 1.2rem;
  }

  &__background {
    background-color: $dark-black;

    @media (prefers-color-scheme: light) {
      background-color: $light-white;
    }
  }

  &__logo {
    cursor: pointer;
    width: 3.5rem;
    margin-right: 2rem;
    & img {
      @media only screen and (max-width: $bp-small) {
        width: 4rem;
        height: 3rem;
        margin: 0 0.5rem;
      }
    }
  }

  &__brand {
    cursor: pointer;
    margin-right: auto;
    margin-left: 2rem;
    font-size: 1.4rem;
    color: $light-white;

    @media only screen and (max-width: $bp-small) {
      // margin-left: 1rem;
      display: none;
    }
  }

  &__contact {
    margin-right: 2rem;

    @media only screen and (max-width: $bp-small) {
      margin-left: auto;
    }

    & img {
      width: 2.5rem;
      height: 2.5rem;
      margin: 0 1rem;

      @media only screen and (max-width: $bp-small) {
        width: 3.2rem;
        height: 3.2rem;
        margin: 0 1.7rem;
      }
    }
  }

  &__email {
    // @media only screen and (max-width: $bp-small) {
    //   margin-right: 1.5rem;
    // }

    & a {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;

      cursor: pointer;
      text-decoration: none;
      transition: all 0.8s ease-in;

      & span {
        line-height: 1;
        font-size: 1.3rem;
        margin-top: 2px;

        @media only screen and (max-width: $bp-small) {
          font-size: 1.6rem;
        }
      }

      & img {
        margin: 0 0 0 1rem;

        @media only screen and (max-width: $bp-small) {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
}
</style>
