<template>
  <div>
    <div class="page-background"></div>

    <div class="container">
      <div class="page-description">
        <div class="row">
          <div class="overview col">
            <small class="subtitle">Case Study</small>
            <h1 class="main-title">UX Research Design - Revolut App Design</h1>
            <h2 class="subtitle">Year</h2>
            <small class="subinfo">2017-2018</small>
            <h2 class="subtitle">Softwares</h2>
            <div class="icons">
              <img
                class="icon"
                src="@/static/img/icons/sketch.png"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/illustrator.png"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/photoshop.png"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/premiere-pro.png"
                alt="icon"
              />
            </div>
          </div>
          <div class="description col">
            <p class="paragraph">
              The project was a challenge started in 2017 in Tokyo. When I
              considered to stop my activity as an eyewear designer, I gave
              myself one month to learn how to be an UX and UI designer and
              design the app DOKOGO, from the logo to the prototype and the
              promoting video. And I made it!
            </p>
            <p class="paragraph">
              DOKOGO is a complete mobile application allowing the user in lack
              of idea to choose a destination according to various parameters
              such as his budget, his travel time, his means of transport, his
              goal etc.
            </p>
            <p class="paragraph">
              DOKOGO is pun composed of the Japanese word "doko" meaning "where"
              and the English word "go": where to go ?
            </p>
            <p class="paragraph">
              Two videos were produced to complete the project: one to show the
              process of creating a prototype for a mobile application and a
              marketing concept video.
            </p>
          </div>
          <section id="scroll-down" class="scroll-btn col-12">
            <a><span></span></a>
          </section>
        </div>
      </div>

      <div class="page-content">
        <div class="row"></div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="bottom-row">
        <nuxt-link tag="div" class="bottom-row__item" to="/louboutin-app">
          <i class="fas fa-chevron-left"></i>Previous work
        </nuxt-link>
        <nuxt-link tag="div" class="bottom-row__item" to="/"
          ><i class="fas fa-redo"></i>All works</nuxt-link
        >
        <nuxt-link tag="div" class="bottom-row__item" to="/ui-design">
          Next work<i class="fas fa-chevron-right"></i
        ></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.page-background {
  background-image: url('../../static/img/revolut-app/background.jpeg') !important;
}
</style>
