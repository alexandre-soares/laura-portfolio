<template>
  <div class="navbar">
    <nuxt-link to="/" tag="div" class="navbar__logo">
      <img src="@/static/img/icons/logo white.svg" alt="logo" />
    </nuxt-link>
    <nuxt-link tag="div" to="/" class="navbar__brand">
      <span>Laura SIBILLE - UX Designer</span>
    </nuxt-link>
    <div class="navbar__contact">
      <img src="@/static/img/icons/behance.svg" alt="behance" />
      <img src="@/static/img/icons/dribbble.svg" alt="dribbble" />
      <img src="@/static/img/icons/linkedin.svg" alt="linkedin" />
    </div>
    <div class="navbar__email">
      <a href="mailto:laura.sibille@gmail.com">
        <span>Contact</span>
        <img src="@/static/img/icons/message.svg" alt="email" />
      </a>
    </div>
  </div>
</template>

<script>
export default {}
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
  background-color: $dark-black;
  z-index: 999;

  @media only screen and (max-width: $bp-small) {
    padding: 1rem 1.2rem;
  }

  &__logo {
    cursor: pointer;

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
      padding: 1rem 2rem;
      border-radius: 3rem;
      background: rgb(239, 72, 125);
      background: linear-gradient(
        180deg,
        rgba(239, 72, 125, 1) 0%,
        rgba(165, 21, 66, 1) 100%
      );
      border: none;
      color: $light-white;
      cursor: pointer;
      text-decoration: none;

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
