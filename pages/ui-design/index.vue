<template>
  <div>
    <div class="page-background"></div>

    <div class="container">
      <div class="page-description">
        <div class="row">
          <div class="overview col-sm-12 col-lg-6">
            <h1 class="portfolio-h1">UI Design</h1>
            <h2 class="portfolio-h2">Year</h2>
            <small class="subinfo">2017-2021</small>
            <h2 class="portfolio-h2">Softwares</h2>
            <div class="icons">
              <img
                class="icon"
                src="@/static/img/icons/softwares/illustrator.svg"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/softwares/xd.svg"
                alt="icon"
              />
            </div>
          </div>
          <div class="description col-sm-12 col-lg-6">
            <p class="paragraph">
              “If a picture is worth a thousand words, a prototype is worth a
              1000 meetings” IDEO states.
            </p>
          </div>

          <Scroll-down-btn />
        </div>
      </div>

      <div class="page-content container">
        <div class="row justify-content-start">
          <div
            v-for="(image, imageIndex) in items2"
            :key="imageIndex"
            class="col-sm-6 col-lg-4"
          >
            <div v-if="image.type == 'img'">
              <img :src="image.html" />
            </div>
            <div v-else>
              <video :src="image.html" type="video/mp4" autoplay loop></video>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Bottom-navbar
      previous-text="Dokogo App"
      next-text="Revolut App"
      previous="/dokogo-app"
      next="/revolut-app"
    />
  </div>
</template>

<script>
import BottomNavbar from '../../components/layout/BottomNavbar.vue'
import ScrollDownBtn from '../../components/layout/ScrollDownBtn.vue'

export default {
  components: { BottomNavbar, ScrollDownBtn },
  data() {
    return {
      items: [
        require('~/static/img/ui-design/gtr.jpg'),
        require('~/static/img/ui-design/cappadocia.jpg'),
        require('~/static/img/ui-design/utrecht.jpg'),
        require('~/static/img/ui-design/skin-care.jpg'),
        require('~/static/img/ui-design/be-ready.jpg'),
        require('~/static/img/ui-design/slider.jpg'),
        require('~/static/img/ui-design/foodies.jpg'),
        require('~/static/img/ui-design/cute-cream.jpg'),
      ],
      items2: [
        {
          type: 'video',
          html: require('~/static/img/ui-design/videos/gtr.mp4'),
        },
        {
          type: 'img',
          html: require('~/static/img/ui-design/utrecht.jpg'),
        },
        {
          type: 'video',
          html: require('~/static/img/ui-design/videos/cappadocia.mp4'),
        },
        {
          type: 'img',
          html: require('~/static/img/ui-design/be-ready.jpg'),
        },
        {
          type: 'video',
          html: require('~/static/img/ui-design/videos/slider.mp4'),
        },
        {
          type: 'img',
          html: require('~/static/img/ui-design/foodies.jpg'),
        },
        {
          type: 'video',
          html: require('~/static/img/ui-design/videos/skin-care.mp4'),
        },
      ],
      index: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.page-background {
  background-image: url('../../static/img/ui-design/background.png') !important;
}

img {
  width: 100%;
  margin: 1rem auto;
}

video {
  width: 100%;
  margin: 1rem auto;
}
</style>
