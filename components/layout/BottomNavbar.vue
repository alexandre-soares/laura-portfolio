<template>
  <div class="container-fluid">
    <div class="bottom-row">
      <nuxt-link tag="a" class="bottom-row__item" :to="previous">
        <i class="fas fa-chevron-left"></i> {{ previousText }}
      </nuxt-link>
      <nuxt-link tag="a" class="bottom-row__item" to="/"
        ><i class="fas fa-redo"></i>All works</nuxt-link
      >
      <nuxt-link tag="a" class="bottom-row__item" :to="next">
        {{ nextText }}<i class="fas fa-chevron-right"></i
      ></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    previous: {
      type: String,
      default: undefined,
    },
    next: {
      type: String,
      default: undefined,
    },
    previousText: {
      type: String,
      default: undefined,
    },
    nextText: {
      type: String,
      default: undefined,
    },
  },
}
</script>

<style lang="scss" scoped>
html.light {
  & .bottom-row {
    color: #121212 !important;
  }
}
</style>
