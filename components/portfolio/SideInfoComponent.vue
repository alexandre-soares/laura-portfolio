<template>
  <div class="overview">
    <h1 class="main-title">{{ mainTitle }}</h1>
    <h2 class="subtitle">Year</h2>
    <small class="subinfo"> {{ year }}</small>
    <h2 class="subtitle">Softwares</h2>
    <div class="icons">
      <img
        v-for="(img, index) in icons"
        :key="index"
        :src="img"
        alt="icon"
        class="icon"
      />
    </div>
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
  },
}
</script>

<style></style>
