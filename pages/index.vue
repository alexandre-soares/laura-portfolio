<template>
  <div class="home">
    <div class="home__container">
      <nuxt-link
        to="/revolut-app"
        tag="div"
        class="home__card home__card--revolut"
      >
        <div class="home__card--info">
          <h3>Revolut App</h3>
        </div>
      </nuxt-link>
      <nuxt-link
        to="/louboutin-app"
        tag="div"
        class="home__card home__card--louboutin"
      >
        <div class="home__card--info">
          <h3>Louboutin App</h3>
        </div>
      </nuxt-link>
      <nuxt-link
        to="/dokogo-app"
        tag="div"
        class="home__card home__card--dokogo"
      >
        <div class="home__card--info">
          <h3>Dokogo App</h3>
        </div>
      </nuxt-link>
      <nuxt-link
        to="/ui-design"
        tag="div"
        class="home__card home__card--ux-design"
      >
        <div class="home__card--info">
          <h3>UI Design</h3>
        </div>
      </nuxt-link>
      <div class="home__card home__card--infos">
        <h3>Send me a message</h3>
        <small>hello@jesaispasencore.com</small>
        <h3>Check on my logofolio</h3>
        <small>Dribbble</small>
        <h3>My Art</h3>
        <small>Behance</small>
      </div>
    </div>
    <div class="scroll-right">
      <i class="fas fa-chevron-right"></i>
      <small>Scroll Right</small>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home {
  margin-left: 40rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  &__container {
    display: flex;
    margin-left: 40rem;
    height: 100vh;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    align-items: center;
  }

  &__card {
    width: 40rem;
    height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: background-size 0.3s ease-in-out;

    &:hover {
      background-size: 110%;

      & .home__card--info {
        display: flex;
      }
    }

    &--revolut {
      background-image: url('/img/home/revolut.jpg');
    }

    &--louboutin {
      background-image: url('/img/home/louboutin.jpg');
    }

    &--dokogo {
      background-image: url('/img/home/dokogo.jpg');
    }

    &--ux-design {
      background-image: url('/img/home/ui-design.jpg');
    }

    &--info {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: $light-white;
      z-index: 999;
      background-color: rgba(0, 0, 0, 0.7);
      display: none;

      & h3 {
        font-size: 2.5rem;
        letter-spacing: 4px;
        text-transform: uppercase;
        font-weight: 100;
      }
    }

    &--infos {
      & h3 {
        margin: 2rem auto;
        font-size: 1.7rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 100;
      }

      & small {
        margin: 1rem auto;
        font-size: 1.4rem;
        letter-spacing: 1px;
      }
    }
  }

  & .scroll-right {
    width: 6rem;
    position: absolute;
    bottom: 8rem;
    right: 4rem;
    font-size: 1.6rem;
    text-align: center;

    & .fas {
      display: block;
      margin: 1rem auto;
    }
  }
}
</style>
