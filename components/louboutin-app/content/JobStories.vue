<template>
  <div>
    <div class="job-stories container">
      <div class="page-content">
        <h3 class="page-content__title">Job Stories</h3>
        <p class="paragraph">
          In addition to personas, I also spent some time understanding the
          context surrounding the users when they use the app in order to
          further understand their motivation and desired outcome.
        </p>
      </div>
    </div>
    <div class="gold-background">
      <div class="container">
        <div class="row job-story">
          <div class="col">
            <p class="paragraph">
              You have a party next week and you want a new pair of pumps. What
              do you do?
            </p>
            <p class="paragraph">
              You find «the one», how do you put it in your cart?
            </p>
            <p class="paragraph">
              You see some shoes you like and you decide to save them for a
              later decision, how do you proceed?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.gold-background {
  background-image: url('../../../static/img/louboutin-app/background-gold.jpg');
  background-size: cover;
  margin: 3rem 0;
  padding: 10rem 15rem;

  @media only screen and (max-width: $bp-small) {
    padding: 2rem 3rem;
  }
}

.job-story {
  padding: 2rem 3rem;
  text-align: center;
  border: 1px solid $light-white;

  & p {
    color: $light-white;
    text-align: center;
    font-size: 1.8rem;
    margin: 2rem auto;
  }

  & p:last-child {
    margin-bottom: 0;
  }
}
</style>
