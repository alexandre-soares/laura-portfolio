<template>
  <div>
    <Top-image :url="require('@/static/img/dokogo-app/background.png')" />

    <div class="container">
      <div class="page-description">
        <small class="case-study-subtitle case-study-subtitle--green"
          >Case Study</small
        >
        <div class="row">
          <Sideinfo
            class="col-12 col-lg-6"
            :main-title="'UX-UI - Dokogo App Design'"
            :year="'2017-2018'"
            :icons="icons"
            :duration="'1 month'"
          />

          <div class="col-12 col-lg-6">
            <div class="description">
              <p class="paragraph">
                The project was a challenge started in 2017 in Tokyo. When I
                considered to stop my activity as an eyewear designer, I gave
                myself one month to learn how to be an UX and UI designer and
                design the app DOKOGO, from the logo to the prototype and the
                promoting video. And I made it!
              </p>
              <p class="paragraph">
                DOKOGO is a complete mobile application allowing the user in
                lack of idea to choose a destination according to various
                parameters such as his budget, his travel time, his means of
                transport, his goal etc.
              </p>
              <p class="paragraph">
                DOKOGO is pun composed of the Japanese word "doko" meaning
                "where" and the English word "go": where to go ?
              </p>
              <p class="paragraph">
                Two videos were produced to complete the project: one to show
                the process of creating a prototype for a mobile application and
                a marketing concept video.
              </p>
              <p class="paragraph">
                <strong>Turn your speakers on 🔊, the musics are cool</strong>
              </p>
            </div>
          </div>

          <Scroll-down-btn />
        </div>
      </div>

      <div class="page-content">
        <Content />
      </div>
    </div>

    <Bottom-navbar
      previous-text="Louboutin App"
      next-text="UI Design"
      previous="/louboutin-app"
      next="/ui-design"
    />
  </div>
</template>

<script>
import TopImage from '../../components/portfolio/TopImage.vue'
import Sideinfo from '../../components/portfolio/Sideinfo.vue'

import Content from '../../components/dokogo-app/Content.vue'

import ScrollDownBtn from '../../components/layout/ScrollDownBtn.vue'
import BottomNavbar from '../../components/layout/BottomNavbar.vue'
export default {
  components: {
    TopImage,
    Sideinfo,
    ScrollDownBtn,
    Content,
    BottomNavbar,
  },
  data() {
    return {
      icons: [
        require('@/static/img/icons/sketch.png'),
        require('@/static/img/icons/illustrator.png'),
        require('@/static/img/icons/photoshop.png'),
        require('@/static/img/icons/premiere-pro.png'),
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
