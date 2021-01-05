<template>
  <div>
    <Top-image />

    <div class="container">
      <div class="page-description">
        <small class="case-study-subtitle">Case Study</small>

        <div class="row">
          <Sideinfo class="col-sm-12 col-lg" />

          <Description class="col-sm-12 col-lg" />

          <Scroll-down-btn />
        </div>
      </div>
    </div>

    <Content />

    <Bottom-navbar
      previous-text="UI Design"
      next-text="Louboutin App"
      previous="/ui-design"
      next="/louboutin-app"
    />
  </div>
</template>

<script>
import Content from '../../components/revolut-app/Content.vue'
import BottomNavbar from '../../components/layout/BottomNavbar.vue'
import ScrollDownBtn from '../../components/layout/ScrollDownBtn.vue'
import Description from '../../components/revolut-app/Description.vue'
import Sideinfo from '../../components/revolut-app/Sideinfo.vue'
import TopImage from '../../components/revolut-app/TopImage.vue'
export default {
  components: {
    TopImage,
    Sideinfo,
    Description,
    ScrollDownBtn,
    BottomNavbar,
    Content,
  },
}
</script>

<style lang="scss"></style>
