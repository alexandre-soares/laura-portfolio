<template>
  <div class="brand-values">
    <div class="container">
      <h3 class="portfolio-h3">Brand Values</h3>
      <div class="row">
        <ul class="col">
          <li>Luxury</li>
          <li>Exclusive</li>
          <li>Modern</li>
          <li>One of a kind</li>
          <li>Burlesque & Fun</li>
          <li>Remarquable</li>
          <li>Fancy</li>
        </ul>
        <div class="brand-values__bg"></div>
        <img
          src="@/static/img/louboutin-app/soulier.svg"
          alt="soulier"
          class="brand-values__img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.brand-values {
  .row {
    position: relative;
    padding: 3rem;
    margin: 5rem auto;
    border: 1px solid $light-white;

    @media (prefers-color-scheme: light) {
      border: 1px solid $dark-black;
    }

    & .col {
      padding-right: 0;
    }

    & ul {
      list-style-type: none;
      padding-left: 0;
      text-align: center;

      & li {
        margin: 2rem auto;
      }
    }
  }

  &__img,
  &__bg {
    position: absolute;
    top: 0;
    left: 50%;
    width: 10%;
    transform: translate(-50%, -50%);
    width: 8rem;
    height: 6rem;

    @media only screen and (max-width: $bp-small) {
      width: 30%;
    }
  }

  &__bg {
    background-color: $dark-blue;
    width: 10rem;
    height: 6rem;

    @media (prefers-color-scheme: light) {
      background-color: $light-white;
    }
  }
}
</style>
