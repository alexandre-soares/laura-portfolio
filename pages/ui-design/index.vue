<template>
  <div>
    <div class="page-background"></div>

    <div class="container">
      <div class="page-description">
        <div class="row">
          <div class="overview col">
            <h1 class="main-title">UI Design</h1>
            <h2 class="subtitle">Year</h2>
            <small class="subinfo">2017-2018</small>
            <h2 class="subtitle">Softwares</h2>
            <div class="icons">
              <img
                class="icon"
                src="@/static/img/icons/illustrator.png"
                alt="icon"
              />
              <img class="icon" src="@/static/img/icons/xd.png" alt="icon" />
            </div>
          </div>
          <div class="description col">
            <p class="paragraph">
              “If a picture is worth a thousand words, a prototype is worth a
              1000 meetings” IDEO states.
            </p>
          </div>

          <Scroll-down-btn />
        </div>
      </div>

      <div class="page-content container">
        <CoolLightBox :items="items" :index="index" @close="index = null">
        </CoolLightBox>

        <div class="row">
          <img
            v-for="(image, imageIndex) in items"
            :key="imageIndex"
            class="img col-4"
            :src="image"
            @click="index = imageIndex"
          />
        </div>
      </div>
    </div>

    <bottom-navbar
      previous-text="Dokogo App"
      next-text="Revolut App"
      previous="/dokogo-app"
      next="/revolut-app"
    />
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import BottomNavbar from '../../components/layout/BottomNavbar.vue'
import ScrollDownBtn from '../../components/layout/ScrollDownBtn.vue'

export default {
  components: { BottomNavbar, CoolLightBox, ScrollDownBtn },
  data() {
    return {
      items: [
        require('~/static/img/ui-design/gtr.svg'),
        require('~/static/img/ui-design/capadoccia.svg'),
        require('~/static/img/ui-design/utrecht.svg'),
        require('~/static/img/ui-design/skin-care.svg'),
        require('~/static/img/ui-design/be ready.svg'),
        require('~/static/img/ui-design/slider.svg'),
        require('~/static/img/ui-design/foodies.svg'),
        require('~/static/img/ui-design/cute-cream.svg'),
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
  cursor: pointer;
}
</style>
