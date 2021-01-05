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
  right: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: $dark-black;
  z-index: 999;

  @media only screen and (max-width: $bp-small) {
    padding: 1rem 1.5rem;
  }

  &__logo {
    cursor: pointer;
  }

  &__brand {
    cursor: pointer;
    margin-right: auto;
    margin-left: 2rem;
    font-size: 1.4rem;
  }

  &__contact {
    margin-right: 2rem;

    @media only screen and (max-width: $bp-small) {
      margin-right: 0;
    }

    & img {
      width: 2.5rem;
      height: 2.5rem;
      margin: 0 1rem;
    }
  }

  &__email {
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
      }

      & img {
        margin: 0 0 0 1rem;
      }
    }
  }
}
</style>
