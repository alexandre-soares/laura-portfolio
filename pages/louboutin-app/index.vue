<template>
  <div>
    <Top-image :url="require('@/static/img/louboutin-app/background.png')" />

    <div class="container">
      <div class="page-description">
        <small class="case-study-subtitle case-study-subtitle--red"
          >Case Study</small
        >
        <div class="row">
          <Side-info
            class="col"
            :main-title="'UX-UI - Louboutin App Design'"
            :year="'2020'"
            :icons="icons"
          />
          <Description-component :paragraphs="paragraphs" class="col" />

          <Scroll-down-btn />
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

          <div class="page-content__title">Coming Soon</div>
        </div>
      </div>
    </div>

    <Bottom-navbar
      previous-text="Revolut App"
      next-text="Dokogo App"
      previous="/revolut-app"
      next="/dokogo-app"
    />
  </div>
</template>

<script>
import BottomNavbar from '../../components/layout/BottomNavbar.vue'
import DescriptionComponent from '../../components/portfolio/DescriptionComponent.vue'
import SideInfo from '../../components/portfolio/SideInfoComponent.vue'
import TopImage from '../../components/portfolio/TopImage.vue'

export default {
  components: { TopImage, SideInfo, BottomNavbar, DescriptionComponent },
  data() {
    return {
      icons: [
        require('@/static/img/icons/xd.png'),
        require('@/static/img/icons/illustrator.png'),
        require('@/static/img/icons/rotaro.png'),
      ],
      paragraphs: [
        `While I was wandering on Louboutin website before Christmas and grumbling
          about how slow their website is, I saw how easy it was to spend money on
          Nike store. Sneakers are cool, but high heels are better for a fancy
          event.`,
        `The next day, I was designing an app for the famous red sole brand.`,
        `The goal of this study case is to check if the web pages on mobile
          correspond to the brand values through a survey and developing an
          e-commerce app that allows user to search and buy shoes in a clean, catchy
          and easy to interact interface.`,
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
