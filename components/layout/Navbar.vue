<template>
  <div class="navbar" :class="backgroundNav ? 'navbar__background' : ''">
    <nuxt-link to="/" tag="div" class="navbar__logo">
      <img src="@/static/img/icons/logos/logo white.svg" alt="logo" />
    </nuxt-link>
    <nuxt-link tag="div" to="/" class="navbar__brand">
      <span>Laura SIBILLE - UX Designer</span>
    </nuxt-link>
    <div class="navbar__contact">
      <a href="https://www.behance.net/laurasibil2c3c" target="_blank">
        <img src="@/static/img/icons/social-medias/behance.svg" alt="behance" />
      </a>
      <a href="https://dribbble.com/LauraSibille" target="_blank">
        <img
          src="@/static/img/icons/social-medias/dribbble.svg"
          alt="dribbble"
        />
      </a>
      <a href="https://www.linkedin.com/in/laura-sibille/" target="_blank">
        <img
          src="@/static/img/icons/social-medias/linkedin.svg"
          alt="linkedin"
        />
      </a>
      <a href="https://www.instagram.com/laurasibille/" target="_blank">
        <img
          src="@/static/img/icons/social-medias/instagram.svg"
          alt="linkedin"
        />
      </a>
    </div>
    <div class="navbar__email">
      <a href="mailto:laura.sibille@gmail.com">
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
  z-index: 9999;
  transition: 0.3s ease-in-out;

  @media only screen and (max-width: $bp-small) {
    padding: 1rem 1.2rem;
  }

  &__background {
    background-color: $dark-black;

    @media (prefers-color-scheme: light) {
      background-color: $mid-grey;
      color: $dark-black;
    }
  }

  &__logo {
    cursor: pointer;
    width: 3rem;

    margin-right: 1rem;
    & img {
      width: 100%;
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

    @media (prefers-color-scheme: light) {
      color: $dark-black;
    }
  }

  &__contact {
    margin-right: 5rem;

    @media only screen and (max-width: $bp-small) {
      margin-left: auto;
      margin-right: 1rem;
    }

    & img {
      width: 2.5rem;
      height: 2.5rem;
      margin: 0 1rem;

      @media only screen and (max-width: $bp-small) {
        width: 3.2rem;
        height: 3.2rem;
        margin: 0 1.2rem;
      }
    }
  }

  &__email {
    & a {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      text-decoration: none;
      padding: 1rem;
      border-radius: 50rem;
      background-color: $light-pink;
      transition: all 0.3s ease-in;

      &:hover {
        background-color: $dark-pink;
      }

      & img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
</style>
