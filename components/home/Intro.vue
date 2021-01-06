<template>
  <div class="home__intro container">
    <div class="row">
      <div class="col-sm-12 col-lg-4">
        <img src="@/static/img/me.jpg" alt="me" />
      </div>
      <div class="col-sm-12 col-lg-8">
        <h1>HI! I’m Laura, I’m French & I am an UX Designer !</h1>
        <p class="paragraph">
          Currently based in Sofia, Bulgaria, I lived & worked in several
          countries to challenge myself and go beyond. Being pushed out of my
          confort zone makes me alive!
        </p>
        <p class="paragraph">
          I really enjoy working in a dynamic team, learning new things everyday
          and break the routine. But I also enjoy working on my own, at home or
          with my foot in the sea.
        </p>
        <p class="paragraph">
          I love loosing myself on internet, being amazed by some Codepen,
          watching random conferences, swearing at my laptop and wondering if
          this button is clickable or not. And popping stuffs. I like popping
          stuffs. Sometimes I draw also. Go check at the end of this page!
        </p>
        <p class="paragraph paragraph--lighter">Scroll for more details!</p>
        <p class="paragraph">
          And do not hesitate to drop the line to send me an email, even to talk
          about your favorite cafe, I’m cool ❤️
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home {
  &__intro {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 15rem 0 5rem;
    height: 100vh;

    h1 {
      text-transform: uppercase;
      letter-spacing: 1px;
      @media only screen and (max-width: $bp-small) {
        text-align: center;
      }
    }

    @media only screen and (max-width: $bp-large) {
      height: auto;
      padding: 5rem 3rem;
    }

    & img {
      width: 100%;

      @media only screen and (max-width: $bp-large) {
        display: block;
        width: 80%;
        margin: 2rem auto;
      }
    }
  }
}
</style>
