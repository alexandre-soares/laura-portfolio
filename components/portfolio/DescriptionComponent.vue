<template>
  <div class="description">
    <p v-for="(paragraph, index) in paragraphs" :key="index" class="paragraph">
      {{ paragraph }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    paragraphs: {
      type: Array,
      default: undefined,
    },
  },
}
</script>

<style lang="scss" scoped>
.description >>> .italic {
  font-style: italic;
}
</style>
