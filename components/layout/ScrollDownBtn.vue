<template>
  <section id="scroll-down" class="scroll-btn col-12">
    <a><span></span></a>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.scroll-btn {
  @media only screen and (max-width: $bp-small) {
    display: none;
  }
}
</style>
