<template>
  <div class="navbar">
    <nuxt-link to="/" tag="div" class="navbar__logo"
      >Creative Spirit - Web Designer</nuxt-link
    >
    <div class="navbar__profile">Who am I?</div>
    <div class="navbar__email">
      <p>Send me an email</p>
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
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: $dark-black;
  color: $light-white;

  &__logo {
    font-size: 1.4rem;
    cursor: pointer;
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
    cursor: pointer;
    transition: 0.3s ease-in;

    &:hover {
      background-color: $light-white;
      color: $dark-pink;
    }
  }
}
</style>
