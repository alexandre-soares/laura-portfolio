<template>
  <div class="map container">
    <h4>I LIVED & WORKED THERE</h4>
    <span class="map__record">(Would love to go back to Asia)</span>
    <div class="row justify-content-between align-items-center">
      <div class="col-sm-12 col-lg">
        <img src="@/static/img/home/countries/france.svg" alt="country" />
        <span>France</span>
      </div>
      <div class="col-sm-12 col-lg">
        <img src="@/static/img/home/countries/bulgaria.svg" alt="country" />
        <span>Bulgaria</span>
      </div>
      <div class="col-sm-12 col-lg">
        <img src="@/static/img/home/countries/china.svg" alt="country" />
        <span>China</span>
      </div>
      <div class="col-sm-12 col-lg">
        <img src="@/static/img/home/countries/south-korea.svg" alt="country" />
        <span>South Korea</span>
      </div>
      <div class="col-sm-12 col-lg">
        <img src="@/static/img/home/countries/japan.svg" alt="country" />
        <span>Japan</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.map {
  padding-top: 4rem;

  &__record {
    font-weight: 100;
    display: block;
    text-align: center;
    width: 100%;
    margin: 2rem auto;
    font-size: 1.7rem;
    letter-spacing: 2px;
    color: #939495;
  }

  & > div {
    text-align: center;
  }

  & img {
    width: 80%;
  }

  & span {
    font-weight: 100;
    display: block;
    text-align: center;
    width: 100%;
    margin: 2rem auto;
    font-size: 1.7rem;
    letter-spacing: 2px;
    color: $light-white;
  }
}
</style>
