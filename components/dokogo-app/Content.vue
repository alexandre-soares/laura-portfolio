<template>
  <div class="row">
    <iframe
      class="img"
      width="560"
      height="515"
      src="https://www.youtube.com/embed/gY8j9aBq0GA"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      class="img"
      width="560"
      height="515"
      src="https://www.youtube.com/embed/8vGQD67ROjY"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <img class="img" src="@/static/img/dokogo-app/iphonex-vue.png" alt="img" />
    <img class="img" src="@/static/img/dokogo-app/dokogo.png" alt="img" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.img {
  width: 75%;
  margin: 5rem auto;
  display: block;

  @media only screen and (max-width: $bp-small) {
    width: 90% !important;
    margin: 1rem auto !important;
  }
}
</style>
