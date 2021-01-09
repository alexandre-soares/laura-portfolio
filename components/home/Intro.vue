<template>
  <div class="intro container">
    <div class="row justify-content-between">
      <div class="col-sm-12 col-lg-7 order-sm-12 order-md-1">
        <h1>
          HI! I’m Laura and I’m a French
          <span class="light-pink">UX Designer !</span>
        </h1>
        <p class="paragraph">
          Currently based in Sofia, Bulgaria, I lived & worked in several
          countries to challenge myself. Being pushed out of my confort zone
          makes me alive!
        </p>
        <p class="paragraph">
          With <strong> 5 years of experience </strong> in industrial and web
          design, I really enjoy working in a dynamic team, involving and
          sharing my knowledge and experience. Whether from office or home
          office.
        </p>
        <p class="paragraph">
          Digital native, amazed by Codepens, I'm always exploring the
          functionalities to the core. On my personal time, I also enjoy
          drawing.
        </p>

        <p class="paragraph">
          Do not hesitate to drop a line by email to discuss your projects.
        </p>

        <div class="col-12">
          <section class="scroll-down-btn">
            <span></span>
          </section>
        </div>
      </div>
      <div class="col-sm-12 col-lg-4 order-sm-1 order-md-12">
        <img class="intro__img" src="@/static/img/me.jpg" alt="me" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.intro {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 8rem 1.5rem 5rem;
  overflow-y: hidden;

  @media only screen and (max-width: $bp-large) {
    padding: 5rem 3rem;
  }

  & p {
    margin: 3rem auto;
  }

  &__img {
    width: 100%;

    @media only screen and (max-width: $bp-large) {
      display: block;
      width: 80%;
      margin: 2rem auto;
    }
  }
}
</style>
