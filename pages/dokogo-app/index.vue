<template>
  <div>
    <Top-image />

    <div class="container">
      <div class="page-description">
        <div class="row">
          <Sideinfo class="col" />

          <Description class="col" />

          <Scroll-down-btn />
        </div>
      </div>

      <div class="page-content">
        <Content />
      </div>
    </div>

    <Bottom-navbar previous="/louboutin-app" next="/ui-design" />
  </div>
</template>

<script>
import Sideinfo from '../../components/dokogo-app/Sideinfo.vue'
import TopImage from '../../components/dokogo-app/TopImage.vue'
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
