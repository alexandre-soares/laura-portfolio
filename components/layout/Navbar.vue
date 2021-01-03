<template>
  <div class="navbar">
    <nuxt-link to="/" tag="div" class="col-2 navbar__logo">
      <img src="@/static/img/icons/logo.png" alt="logo" class="logo" />
      Creative Spirit - Web Designer</nuxt-link
    >
    <nuxt-link to="/profile" tag="div" class="col navbar__profile"
      >Who am I?</nuxt-link
    >
    <div class="col-2 navbar__email">
      <a href="mailto:laura.sibille@gmail.com">Send me an email</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 3rem;
  background-color: $dark-black;
  color: $light-white;
  z-index: 10;
  text-align: center;

  & .logo {
    width: 4rem;
    margin-right: 0.2rem;
  }

  &__logo {
    font-size: 1.4rem;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  &__profile {
    font-size: 1.4rem;
    cursor: pointer;
  }

  &__email {
    background-color: $dark-pink;
    cursor: pointer;
    padding: 1rem 2rem;
    border-radius: 5rem;
    font-size: 1.4rem;
    letter-spacing: 1px;
    font-family: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s ease-in;

    & a {
      text-decoration: none;
      color: $light-white;

      &:hover {
      }
    }

    &:hover {
      background-color: $light-white;
    }

    &:hover a {
      color: $dark-pink;
    }
  }
}
</style>
