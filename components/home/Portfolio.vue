<template>
  <div class="portfolio container">
    <div id="ux-design">
      <h2>UX Design - Case studies</h2>
      <div class="row">
        <div class="col-sm-12 col-lg-4">
          <nuxt-link tag="a" to="/revolut-app" class="portfolio__card">
            <img src="@/static/img/home/revolut.jpg" alt="revolut" />
            <h3>
              REVOLUT <br />
              <span class="lighter">UX RESEARCH & DESIGN</span>
            </h3>
          </nuxt-link>
        </div>
        <div class="col-sm-12 col-lg-4">
          <nuxt-link tag="a" to="/dokogo-app" class="portfolio__card">
            <img src="@/static/img/home/dokogo.jpg" alt="dokogo" />
            <h3>
              DOKOGO <br />
              <span class="lighter">UX CREATION PROCESS - VIDEO</span>
            </h3>
          </nuxt-link>
        </div>
        <div class="col-sm-12 col-lg-4">
          <nuxt-link tag="a" to="/louboutin-app" class="portfolio__card">
            <img src="@/static/img/home/louboutin.jpg" alt="louboutin" />
            <h3>
              LOUBOUTIN <br />
              <span class="lighter">APP DESIGN</span>
            </h3>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div id="ui-design">
      <h2>UI Design</h2>
      <div class="row justify-content-start">
        <div class="col-sm-12 col-lg-4">
          <nuxt-link tag="a" to="/ui-design" class="portfolio__card">
            <video
              src="@/static/img/ui-design/videos/skin-care.mp4"
              type="video/mp4"
              autoplay
              loop
            ></video>
            <h3>
              <span class="lighter">Mock-ups & Prototypes </span>
            </h3>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.portfolio {
  &__card {
    padding: 4rem 0;
    text-decoration: none;
    color: $light-white;
    filter: grayscale(1);
    transition: 0.3s ease-in-out;

    &:hover {
      filter: grayscale(0);
      color: $light-pink;
    }

    @media only screen and (max-width: $bp-large) {
      filter: grayscale(0);
    }

    @media only screen and (max-width: $bp-small) {
      padding: 2rem 0;
    }

    & img,
    & video {
      width: 100%;
      cursor: pointer;

      @media only screen and (max-width: $bp-large) {
        width: 75%;
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>
