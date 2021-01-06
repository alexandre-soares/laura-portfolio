<template>
  <div class="home__map container">
    <h2>I LIVED & WORKED THERE</h2>
    <div class="row">
      <span>(For the record, I would love to go back to Asia)</span>
      <img src="@/static/img/profile/map.svg" alt="map" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home {
  &__map {
    @media only screen and (max-width: $bp-small) {
      width: 90%;
    }

    h2 {
      text-transform: uppercase;
      font-size: 4rem;
      font-family: 'Baskerville';
      font-weight: 100;
      letter-spacing: 1px;
      margin: 4rem 0;

      @media only screen and (max-width: $bp-small) {
        margin: 1rem auto;
        text-align: center;
      }
    }

    & img {
      width: 80%;
      margin: 2rem auto;

      @media only screen and (max-width: $bp-small) {
        width: 80%;
        height: 80%;
      }
    }

    & span {
      font-weight: 100;
      display: block;
      text-align: center;
      width: 100%;
      margin: 2rem auto;
      font-size: 1.7rem;
      letter-spacing: 2px;
      color: #939495;
    }
  }
}
</style>
