<template>
  <div class="home__intro container">
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
          With 5 years of experience in industrial and web design, I really
          enjoy working in a dynamic team, involving and sharing my knowledge
          and experience. Whether from office or home office.
        </p>
        <p class="paragraph">
          Digital native, amazed by Codepens, I'm always exploring the
          functionalities to the core. On my personal time, I also enjoy
          drawing.
        </p>

        <p class="paragraph">
          Do not hesitate to drop a line by email to discuss your projects.
        </p>

        <section id="scroll-down" class="scroll-btn col-12">
          <a><span></span></a>
        </section>
      </div>
      <div class="col-sm-12 col-lg-4 order-sm-1 order-md-12">
        <img src="@/static/img/me.jpg" alt="me" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home #scroll-down a {
  margin: 5rem 0 4rem;
  display: block;
  position: relative;
  padding: 1rem;
}

.home #scroll-down span {
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}

.home {
  &__intro {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 10rem 0 5rem;
    height: 100vh;
    overflow-y: hidden;

    & p {
      margin: 3rem auto;
    }

    h1 {
      text-transform: uppercase;
      font-size: 4rem;
      font-family: 'Baskerville';
      font-weight: 100;
      letter-spacing: 1px;
      margin: 0 0 6rem;

      @media only screen and (max-width: $bp-large) {
        margin: 4rem auto;
        text-align: center;
      }
      @media only screen and (max-width: $bp-small) {
        margin: 4rem auto;
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
