<template>
  <div>
    <Top-image :url="require('@/static/img/louboutin-app/background.png')" />

    <div class="container">
      <div class="page-description">
        <small class="case-study-subtitle case-study-subtitle--red"
          >Case Study</small
        >
        <div class="row">
          <SideInfo
            class="col-12 col-lg-6"
            :main-title="'UX-UI - Louboutin App Design'"
            :year="'2020'"
            :icons="icons"
            :duration="'2 weeks'"
          />
          <Description-component
            :paragraphs="paragraphs"
            class="col-12 col-lg-6"
          />

          <Scroll-down-btn />
        </div>
      </div>
    </div>

    <div class="page-content">
      <Content />
    </div>

    <Bottom-navbar
      previous-text="Dokogo App"
      next-text="UI Design"
      previous="/dokogo-app"
      next="/ui-design"
    />
  </div>
</template>

<script>
import BottomNavbar from '../../components/layout/BottomNavbar.vue'
import DescriptionComponent from '../../components/portfolio/DescriptionComponent.vue'
import SideInfo from '../../components/portfolio/Sideinfo.vue'
import TopImage from '../../components/portfolio/TopImage.vue'
import Content from '../../components/louboutin-app/Content.vue'
import ScrollDownBtn from '../../components/layout/ScrollDownBtn.vue'

export default {
  components: {
    TopImage,
    SideInfo,
    BottomNavbar,
    DescriptionComponent,
    Content,
    ScrollDownBtn,
  },
  data() {
    return {
      icons: [
        require('@/static/img/icons/softwares/xd.svg'),
        require('@/static/img/icons/softwares/illustrator.svg'),
        require('@/static/img/icons/softwares/rotato.png'),
      ],
      paragraphs: [
        `While I was browsing on Louboutin website before Christmas and grumbling
          about how slow their website is, I could not help but compare how easy it was to spend money on such apps as
          Nike store. And indeed sneakers are cool, but high heels are better for a fancy
          event.`,
        `As soon as the next day, I engaged in designing an app for the famous red sole brand.`,
        `The goal of this study case was to check if the web pages on mobile
          feature to the brand values through a survey and the development of an
          e-commerce app.`,
        `The objective was to identify how user search and enable them to buy shoes in a clean, catchy
          and easy to interact interface.`,
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
