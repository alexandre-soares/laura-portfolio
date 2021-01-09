<template>
  <div>
    <div
      class="process-navbar"
      :class="isFixed ? 'process-navbar--fixed' : 'process-navbar--unfixed'"
    >
      <div class="container-fluid">
        <div class="row justify-content-betwen">
          <div class="col">
            <span
              v-scroll-to="{ el: '#emphazise', offset: -150 }"
              class="labels process-navbar--active"
              >Emphasize</span
            >
          </div>
          <div class="col">
            <span v-scroll-to="{ el: '#define', offset: -150 }" class="labels"
              >Define</span
            >
          </div>
          <div class="col">
            <span v-scroll-to="{ el: '#ideate', offset: -150 }" class="labels"
              >Ideate</span
            >
          </div>
          <div class="col">
            <span v-scroll-to="{ el: '#build', offset: -150 }" class="labels"
              >Build <span class="label-hide">& Test</span></span
            >
          </div>
          <div class="col">
            <span
              v-scroll-to="{ el: '#prototype', offset: -150 }"
              class="labels"
              >Prototype</span
            >
          </div>
        </div>
      </div>
    </div>

    <div id="emphazise" class="categories">
      <Persons />

      <Job-stories />

      <Guerilla />

      <Scenarios />
    </div>

    <div id="define" class="categories">
      <Pain-points />
    </div>

    <div id="ideate" class="categories">
      <Solutions />
    </div>

    <div id="build" class="categories">
      <Tests />

      <Final-result />
    </div>

    <div id="prototype" class="categories">
      <Prototype />
    </div>
  </div>
</template>

<script>
import FinalResult from './content/FinalResult.vue'
import Guerilla from './content/Guerilla.vue'
import JobStories from './content/JobStories.vue'
import PainPoints from './content/PainPoints.vue'
import Persons from './content/Persons.vue'
import Scenarios from './content/Scenarios.vue'
import Solutions from './content/Solutions.vue'
import Tests from './content/Tests.vue'
import Prototype from './content/Prototype.vue'
export default {
  scrollToTop: true,
  components: {
    Persons,
    JobStories,
    Guerilla,
    Scenarios,
    PainPoints,
    Solutions,
    Tests,
    FinalResult,
    Prototype,
  },
  data() {
    return {
      isFixed: false,
    }
  },

  mounted() {
    /* FIXING PROCESS NAVBAR */

    // console.log('mounted')

    this.isFixed = false

    const processNavbar = document.querySelector('.process-navbar')
    const navbar = document.querySelector('.navbar')

    const rect = processNavbar.getBoundingClientRect()
    const rect2 = navbar.getBoundingClientRect()

    const limitHeight = rect.bottom - rect.height - rect2.height

    // console.log(`processnavbar bounding client is ${rect.bottom}`)
    // console.log(`navbar bounding client is ${rect2.height}`)
    // console.log(`before scroll : limit Height is ${limitHeight}px`)

    window.addEventListener('scroll', () => {
      // console.log(`window.scrollY is ${window.scrollY}`)
      // console.log(rect.bottom)

      if (
        window.scrollY < limitHeight ||
        window.scrollY <= 0 ||
        rect.bottom < 0
      ) {
        // console.log('unfix nav')
        this.isFixed = false
      } else {
        // console.log('fix nav')
        this.isFixed = true
      }
    })

    /* ADDING CSS FOR LABELS ON PROCESS BAR */

    // const triggerBottom = window.innerHeight / 5
    const categories = document.querySelectorAll('.categories')
    const labels = document.querySelectorAll('.labels')

    window.addEventListener('scroll', () => {
      categories.forEach((categorie, index) => {
        const categorieTop = categorie.getBoundingClientRect().top
        if (categorieTop < 150) {
          categorie.classList.add('show')
          labels[index].classList.add('process-navbar--active')
        } else {
          categorie.classList.remove('show')
          labels[index].classList.remove('process-navbar--active')
        }
      })
    })
  },
}
</script>

<style lang="scss" scoped>
.process-navbar {
  padding: 2rem 1rem;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 1px;
  background-color: $dark-blue;
  text-transform: uppercase;
  z-index: 999;
  transition: 0.3s ease-in;

  @media only screen and (max-width: $bp-small) {
    font-size: 1.1rem;

    & .label-hide {
      display: none;
    }
  }

  & .labels {
    cursor: pointer;
    transition: 0.3s ease-in;
  }

  &--unfixed {
    position: relative;
  }

  &--fixed {
    position: fixed;
    top: 58px;
    left: 0;
    width: 100vw;
  }

  &--active {
    color: $light-pink;
  }
}

.img {
  width: 75%;
  margin: 5rem auto;
  display: block;

  @media only screen and (max-width: $bp-small) {
    width: 90%;
  }
}
</style>
