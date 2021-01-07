<template>
  <div class="graphic-charter">
    <div class="container">
      <div class="row">
        <div class="col-12 col-6">
          <img src="@/static/img/louboutin-app/colours.png" alt="colours" />
          <img src="@/static/img/louboutin-app/icons.png" alt="icons" />
        </div>
        <div class="col-12 col-6">
          <img
            src="@/static/img/louboutin-app/typography.png"
            alt="typography"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.graphic-charter {
  margin: 2rem auto;
  padding: 2rem;
  background-image: url('../../../static/img/louboutin-app/background-white.jpg');

  & img {
    width: 70%;
    display: block;
    margin: 1rem auto 2rem;
  }
}
</style>
