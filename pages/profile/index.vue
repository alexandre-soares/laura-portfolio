<template>
  <div class="profile">
    <div class="intro container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-10">
          <h1>HI! I’m Laura, I’m French & I AM a Designer!</h1>
          <p class="paragraph">
            Currently based in Sofia, Bulgaria, I lived & worked in several
            countries to challenge myself and go beyond. Being pushed out of my
            confort zone makes me alive!
          </p>
          <p class="paragraph">
            I really enjoy working in a dynamic team, learning new things
            everyday and break the routine. But I also enjoy working on my own,
            at home or with my foot in the sea.
          </p>
          <p class="paragraph">
            I love loosing myself on internet, being amazed by some Codepen,
            watching random conferences, swearing at my laptop and wondering if
            this button is clickable or not. And popping stuffs. I like popping
            stuffs. Sometimes I draw also. Go check at the end of this page!
          </p>
          <p class="paragraph paragraph--lighter">Scroll for more details!</p>
          <p class="paragraph">
            And do not hesitate to drop the line to send me an email, even to
            talk about your favorite cafe, I’m cool ❤️
          </p>
        </div>

        <scroll-down-btn />
      </div>
    </div>

    <div class="map container">
      <div class="row">
        <h2>I LIVED & WORKED THERE</h2>
        <span>(For the record, I would love to go back to Asia)</span>
        <img src="@/static/img/profile/map.svg" alt="map" />
      </div>
    </div>

    <div class="icons container">
      <div class="row justify-content-between align-items-start">
        <div class="col-6">
          <div class="daily-icons">
            <h3>What I use on regular basis</h3>
            <div class="row">
              <img
                class="icon"
                src="@/static/img/icons/sketch.png"
                alt="icon"
              />
              <img class="icon" src="@/static/img/icons/xd.png" alt="icon" />
              <img
                class="icon"
                src="@/static/img/icons/in.svg"
                alt="icon"
                style="margin-right: 1rem"
              />
              <img
                class="icon"
                src="@/static/img/icons/illustrator.png"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/photoshop.png"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/premiere-pro.png"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/lightroom.svg"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/indesign.svg"
                alt="icon"
              />
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <h3>See my Linkedin profile</h3>
            <div class="row">
              <a
                href="https://www.linkedin.com/in/laura-sibille/"
                target="_blank"
              >
                <img
                  class="icon"
                  src="@/static/img/icons/linkedin.svg"
                  alt="linkedin"
                />
              </a>
            </div>
            <h3>& my Social media</h3>
            <div class="row">
              <a href="https://www.behance.net/laurasibil2c3c" target="_blank">
                <img
                  class="icon"
                  src="@/static/img/icons/behance.svg"
                  alt="behance"
                />
              </a>
              <a href="https://dribbble.com/LauraSibille" target="_blank">
                <img
                  class="icon"
                  src="@/static/img/icons/dribbble.svg"
                  alt="dribbble"
                />
              </a>
            </div>
            <h3 class="download">Download My Resume</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="portfolio-wrapper">
      <div class="navbar">
        <div class="row align-items-center justify-content-between">
          <button
            class="btn"
            :class="{ highlight: selected == 'logo-design' }"
            @click="selected = 'logo-design'"
          >
            Logo Design
          </button>
          <button
            class="btn"
            :class="{ highlight: selected == 'art' }"
            @click="selected = 'art'"
          >
            Art
          </button>
          <button
            class="btn"
            :class="{ highlight: selected == 'digital-painting' }"
            @click="selected = 'digital-painting'"
          >
            Digital Painting
          </button>
        </div>
      </div>
      <div class="portfolio container-fluid">
        <Logos v-show="selected == 'logo-design'" class="logo-design" />

        <Art v-show="selected == 'art'" class="art" />

        <Digital-painting
          v-show="selected == 'digital-painting'"
          class="digital-painting"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ScrollDownBtn from '../../components/layout/ScrollDownBtn.vue'
import Art from '../../components/profile/Art.vue'
import DigitalPainting from '../../components/profile/DigitalPainting.vue'
import Logos from '../../components/profile/Logos.vue'
export default {
  components: { ScrollDownBtn, DigitalPainting, Art, Logos },
  data() {
    return {
      selected: 'logo-design',
    }
  },
}
</script>

<style lang="scss" scoped>
.profile {
}

.map,
.intro,
.icons {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  text-align: center;
  font-family: 'Baskerville', sans-serif;
  font-size: 1.8rem;
  letter-spacing: 1px;
}

h2 + span {
  font-weight: 100;
  display: block;
  text-align: center;
  width: 100%;
  margin: 2rem auto;
  font-size: 1.7rem;
  letter-spacing: 2px;
  color: #939495;
}

span + img {
  width: 70%;
  margin: 2rem auto;
}

h3 {
  font-family: 'Baskerville', sans-serif;
  font-size: 1.6rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.icon {
  height: 5rem;
  width: 5rem;
}

.card {
  text-align: center;
  & .icon {
    margin: 3rem auto;
    text-align: center;
  }

  & img {
    cursor: pointer;
  }

  .download {
    color: $light-pink;
    margin: 3rem auto;
    cursor: pointer;
  }
}

.portfolio-wrapper {
  padding-bottom: 10rem;

  & .navbar {
    background-color: #121212;
    padding: 1rem 4rem;
  }

  & .btn {
    border: none;
    text-transform: uppercase;
    font-size: 1.4rem;
    background-color: transparent;
    color: $light-white;
    text-align: center;
    cursor: pointer;
    padding: 1rem 2rem;

    &.highlight {
      color: $light-pink;
    }

    &:focus {
      outline: none;
    }
  }
}

.portfolio {
  padding: 2rem 4rem;
}

.digital-painting {
  margin: 3rem auto;
}
</style>
