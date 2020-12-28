<template>
  <div>
    <div class="page-background"></div>

    <div class="container">
      <div class="page-description">
        <div class="row">
          <div class="overview col">
            <small class="subtitle">Case Study</small>
            <h1 class="main-title">UX-UI - Louboutin App Design</h1>
            <h2 class="subtitle">Year</h2>
            <small class="subinfo">2020</small>
            <h2 class="subtitle">Softwares</h2>
            <div class="icons">
              <img class="icon" src="@/static/img/icons/xd.png" alt="icon" />
              <img
                class="icon"
                src="@/static/img/icons/illustrator.png"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/rotaro.png"
                alt="icon"
              />
            </div>
          </div>
          <div class="description col">
            <p class="paragraph">
              While I was wandering on Louboutin website before Christmas and
              grumbling about how slow their website is, I saw how easy it was
              to spend money on Nike store. Sneakers are cool, but high heels
              are better for a fancy event.
            </p>
            <p class="paragraph">
              The next day, I was designing an app for the famous red sole
              brand.
            </p>
            <p class="paragraph">
              The goal of this study case is to check if the web pages on mobile
              correspond to the brand values through a survey and developing an
              e-commerce app that allows user to search and buy shoes in a
              clean, catchy and easy to interact interface.
            </p>
          </div>
          <section id="scroll-down" class="scroll-btn col-12">
            <a><span></span></a>
          </section>
        </div>
      </div>

      <div class="page-content">
        <div class="row">
          <p class="paragraph">
            Louboutin is one of my favorite shoe brands, but I run into problems
            every time I use go the website on my phone. Although I am not
            affiliated with the red sole brand, I wanted to figure out if other
            users were having similar issues. I decided to conduct usability
            tests, which led me to discover some pain points and redesign part
            of the experience.
          </p>

          <div class="page-content__title">
            <h3>User Personas</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="bottom-row">
        <nuxt-link tag="div" class="bottom-row__item" to="/revolut-app">
          <i class="fas fa-chevron-left"></i>Previous work
        </nuxt-link>
        <nuxt-link tag="div" class="bottom-row__item" to="/"
          ><i class="fas fa-redo"></i>All works</nuxt-link
        >
        <nuxt-link tag="div" class="bottom-row__item" to="/dokogo-app">
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
  background-image: url('../../static/img/louboutin-app/background.jpeg') !important;
}
</style>
