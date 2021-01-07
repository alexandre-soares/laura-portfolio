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
        require('@/static/img/icons/xd.png'),
        require('@/static/img/icons/illustrator.png'),
        require('@/static/img/icons/rotaro.png'),
      ],
      paragraphs: [
        `"THE NEW REVOLUT UPDATE S**KS" This is what I have been hearing all 2020 long. Dull colours, messy information, Revolut team managed to transform their initial great app in a nightmare for their user.`,
        `With this UX research, I’ll try to see what’s wrong with the main features and suggest a new design. The goal being "Don’t let me think".`,
        `I’ll make it short, because too much text is annoying, but I’ll be glad to spend one hour on zoom to cover all the missing points of this study.`,
        `Regarding the method, I wanted to be as close as possible to user needs with a human-centred approach and I used Lean UX design thinking. For user research, I relied on Google statistics showing that 85% of major usability problems can be solved with feedback from just 5 people. Guerrilla usability testing is therefore perfect for this case study!`,
      ],
    }
  },
}
</script>

<style lang="scss"></style>
