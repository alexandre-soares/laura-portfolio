<template>
  <div
    class="page-background"
    :style="'background-image: url(' + url + ')'"
  ></div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: undefined,
    },
  },
}
</script>
