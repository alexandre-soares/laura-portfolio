<template>
  <div>
    <Top-image :url="require('@/static/img/revolut-app/background.jpeg')" />

    <div class="container">
      <div class="page-description">
        <small class="case-study-subtitle">Case Study</small>

        <div class="row">
          <Sideinfo
            class="col-12 col-lg-6"
            :main-title="'UX Research & Design - Revolut App Design'"
            :year="'2020'"
            :icons="icons"
            :duration="'1 month'"
          />

          <Description-component
            :paragraphs="paragraphs"
            class="col-12 col-lg-6"
          />

          <Scroll-down-btn />
        </div>
      </div>
    </div>

    <Content />

    <Bottom-navbar
      previous-text="UI Design"
      next-text="Dokogo App"
      previous="/ui-design"
      next="/dokogo-app"
    />
  </div>
</template>

<script>
import Content from '../../components/revolut-app/Content.vue'

import BottomNavbar from '../../components/layout/BottomNavbar.vue'
import ScrollDownBtn from '../../components/layout/ScrollDownBtn.vue'

import TopImage from '../../components/portfolio/TopImage.vue'
import Sideinfo from '../../components/portfolio/Sideinfo.vue'
import DescriptionComponent from '../../components/portfolio/DescriptionComponent.vue'

export default {
  components: {
    TopImage,
    Sideinfo,
    DescriptionComponent,
    Content,
    ScrollDownBtn,
    BottomNavbar,
  },
  data() {
    return {
      icons: [
        require('@/static/img/icons/softwares/xd.svg'),
        require('@/static/img/icons/softwares/illustrator.svg'),
        require('@/static/img/icons/softwares/rotato.png'),
      ],
      paragraphs: [
        `"THE NEW REVOLUT UPDATE S**KS" This is what I have been hearing all 2020 long. Dull colours, messy information, Revolut team managed to transform their initial great app into a nightmare for their users.`,
        `With this UX research, I tried to see what was wrong with the main features and suggested a new design. The baseline being "Don’t let me think".`,
        `Of course this study could be push beyond and I will be glad to share over zoom as per your inputs.`,
        `Regarding the method, I aimed to be as close as possible to user needs with a human-centered approach and I used Lean UX design thinking. For user research, I relied on Google statistics showing that 85% of major usability problems can be solved with feedback from just 5 people. Guerrilla usability testing was therefore perfect for this case study!`,
      ],
    }
  },
}
</script>

<style lang="scss"></style>
