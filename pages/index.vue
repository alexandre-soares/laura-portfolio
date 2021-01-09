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

<style lang="scss" scoped></style>
