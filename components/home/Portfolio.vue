<template>
  <div class="home__portfolio">
    <div class="home__ux-design container">
      <h2>UX Design - Case studies</h2>
      <div class="row">
        <div class="col-sm-12 col-lg-4">
          <div class="home__card">
            <img src="@/static/img/home/revolut.svg" alt="revolut" />
            <h3>
              REVOLUT <br />
              <span class="lighter">UX RESEARCH & DESIGN</span>
            </h3>
          </div>
        </div>
        <div class="col-sm-12 col-lg-4">
          <div class="home__card">
            <img src="@/static/img/home/dokogo.svg" alt="dokogo" />
            <h3>
              DOKOGO <br />
              <span class="lighter">UX CREATION PROCESS - VIDEO</span>
            </h3>
          </div>
        </div>
        <div class="col-sm-12 col-lg-4">
          <div class="home__card">
            <img src="@/static/img/home/louboutin.svg" alt="louboutin" />
            <h3>
              LOUBOUTIN <br />
              APP DESIGN
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="home__ui-design container">
      <h2>UI Design</h2>

      <div class="row justify-content-start">
        <div class="col-sm-12 col-lg-4">
          <div class="home__card">
            <img src="@/static/img/home/ui-design.svg" alt="ui-design" />
            <h3>
              <span class="lighter">Mock-ups & Prototypes </span>
            </h3>
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
h2 {
  text-transform: uppercase;
  font-size: 4rem;
  font-family: 'Baskerville';
  font-weight: 100;
  letter-spacing: 1px;
  margin: 4rem 0;

  @media only screen and (max-width: $bp-small) {
    margin: 1rem auto;
    text-align: center;
  }
}
.home {
  &__card {
    padding: 4rem 0;
    filter: grayscale(1);
    transition: 0.3s ease-in-out;

    &:hover {
      filter: grayscale(0);
    }

    @media only screen and (max-width: $bp-small) {
      padding: 2rem 0;
    }

    & img {
      width: 100%;
      cursor: pointer;

      @media only screen and (max-width: $bp-small) {
        width: 75%;
        display: block;
        margin: 0 auto;
      }
    }

    & h3 {
      text-transform: uppercase;
      text-align: center;
      font-size: 1.6rem;
      margin: 2rem auto;
      line-height: 1.6;
    }
  }
}
</style>
