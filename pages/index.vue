<template>
  <div class="home">
    <Intro />

    <Portfolio />

    <Icons />

    <Map />

    <Last-infos />
  </div>
</template>

<script>
import Icons from '../components/home/Icons.vue'
import Intro from '../components/home/Intro.vue'
import LastInfos from '../components/home/LastInfos.vue'
import Map from '../components/home/Map.vue'
import Portfolio from '../components/home/Portfolio.vue'

export default {
  components: { LastInfos, Map, Intro, Icons, Portfolio },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.ux-design,
.ui-design,
.icons,
.map,
.infos {
  padding-right: 0;
  padding-left: 0;
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
  }
}

.home {
  &__case-study {
    padding: 4rem 0;

    @media only screen and (max-width: $bp-small) {
      padding: 2rem 0;
    }

    & img {
      width: 100%;
      cursor: pointer;

      @media only screen and (max-width: $bp-small) {
        width: 75%;
        display: block;
        margin: 0 auto;
      }
    }

    & h3 {
      text-transform: uppercase;
      text-align: center;
      font-size: 1.6rem;
      margin: 2rem auto;
      line-height: 1.6;
    }
  }
}
</style>
