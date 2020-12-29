<template>
  <div class="container-fluid">
    <div class="bottom-row">
      <nuxt-link tag="a" class="bottom-row__item" :to="previous">
        <i class="fas fa-chevron-left"></i>Previous work
      </nuxt-link>
      <nuxt-link tag="a" class="bottom-row__item" to="/"
        ><i class="fas fa-redo"></i>All works</nuxt-link
      >
      <nuxt-link tag="a" class="bottom-row__item" :to="next">
        Next work<i class="fas fa-chevron-right"></i
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
  },
}
</script>

<style lang="scss">
html.light {
  & .bottom-row {
    color: #121212 !important;
  }
}
</style>
