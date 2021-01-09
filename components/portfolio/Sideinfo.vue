<template>
  <div class="overview">
    <h1 class="portfolio-h1">{{ mainTitle }}</h1>
    <h2 class="portfolio-h2">Year</h2>
    <small class="subinfo"> {{ year }}</small>
    <h2 class="portfolio-h2">Softwares</h2>
    <div class="icons">
      <img
        v-for="(img, index) in icons"
        :key="index"
        :src="img"
        alt="icon"
        class="icon"
      />
    </div>
    <h2 class="portfolio-h2">Duration</h2>
    <small class="subinfo"> {{ duration }}</small>
  </div>
</template>

<script>
export default {
  props: {
    mainTitle: {
      type: String,
      default: undefined,
    },
    year: {
      type: String,
      default: undefined,
    },
    icons: {
      type: Array,
      default: undefined,
    },
    duration: {
      type: String,
      default: undefined,
    },
  },
}
</script>

<style></style>
