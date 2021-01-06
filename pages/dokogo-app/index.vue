<template>
  <div>
    <Top-image :url="require('@/static/img/dokogo-app/background.png')" />

    <div class="container">
      <div class="page-description">
        <small class="case-study-subtitle case-study-subtitle--green"
          >Case Study</small
        >
        <div class="row">
          <Sideinfo class="col-sm-12 col-lg" />

          <Description class="col-sm-12 col-lg" />

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
import Sideinfo from '../../components/dokogo-app/Sideinfo.vue'
import TopImage from '../../components/portfolio/TopImage.vue'
import Description from '../../components/dokogo-app/Description.vue'
import ScrollDownBtn from '../../components/layout/ScrollDownBtn.vue'
import Content from '../../components/dokogo-app/Content.vue'
import BottomNavbar from '../../components/layout/BottomNavbar.vue'
export default {
  components: {
    TopImage,
    Sideinfo,
    Description,
    ScrollDownBtn,
    Content,
    BottomNavbar,
  },
}
</script>

<style lang="scss" scoped></style>
