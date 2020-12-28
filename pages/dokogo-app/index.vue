<template>
  <div>
    <div class="page-background"></div>

    <div class="container">
      <div class="page-description">
        <div class="row">
          <div class="overview col">
            <small class="subtitle">Case Study</small>
            <h1 class="main-title">UX-UI - Dokogo App Design</h1>
            <h2 class="subtitle">Year</h2>
            <small class="subinfo">2017-2018</small>
            <h2 class="subtitle">Softwares</h2>
            <div class="icons">
              <img
                class="icon"
                src="@/static/img/icons/sketch.png"
                alt="icon"
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
            </div>
          </div>
          <div class="description col">
            <p class="paragraph">
              The project was a challenge started in 2017 in Tokyo. When I
              considered to stop my activity as an eyewear designer, I gave
              myself one month to learn how to be an UX and UI designer and
              design the app DOKOGO, from the logo to the prototype and the
              promoting video. And I made it!
            </p>
            <p class="paragraph">
              DOKOGO is a complete mobile application allowing the user in lack
              of idea to choose a destination according to various parameters
              such as his budget, his travel time, his means of transport, his
              goal etc.
            </p>
            <p class="paragraph">
              DOKOGO is pun composed of the Japanese word "doko" meaning "where"
              and the English word "go": where to go ?
            </p>
            <p class="paragraph">
              Two videos were produced to complete the project: one to show the
              process of creating a prototype for a mobile application and a
              marketing concept video.
            </p>
          </div>
          <section id="scroll-down" class="scroll-btn col-12">
            <a><span></span></a>
          </section>
        </div>
      </div>

      <div class="page-content">
        <div class="row">
          <iframe
            class="img"
            width="560"
            height="515"
            src="https://www.youtube.com/embed/gY8j9aBq0GA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            class="img"
            width="560"
            height="515"
            src="https://www.youtube.com/embed/8vGQD67ROjY"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <img
            class="img"
            src="@/static/img/dokogo-app/iphonex-vue.png"
            alt="img"
          />
          <img class="img" src="@/static/img/dokogo-app/dokogo.png" alt="img" />
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="bottom-row">
        <nuxt-link tag="div" class="bottom-row__item" to="/louboutin-app">
          <i class="fas fa-chevron-left"></i>Previous work
        </nuxt-link>
        <nuxt-link tag="div" class="bottom-row__item" to="/"
          ><i class="fas fa-redo"></i>All works</nuxt-link
        >
        <nuxt-link tag="div" class="bottom-row__item" to="/ui-design">
          Next work<i class="fas fa-chevron-right"></i
        ></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.page-background {
  height: 100vh;
  width: 100vw;
  background-image: url('../../static/img/home/dokogo.jpg');
  background-size: cover;
  background-position: center center;
  z-index: 999;
}

.page-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
}

.subtitle {
  font-size: 1.8rem;
  margin: 1rem 0;
}

.main-title {
  font-size: 5rem;
  margin: 2rem 0;
  font-family: 'Baskerville', sans-serif;
  font-weight: 200;
}

h2.subtitle {
  margin: 1rem 0;
}

.subinfo {
  margin: 2rem 0;
  display: block;
  font-size: 1.5rem;
}

.icons {
}

.icons .icon {
  height: 3rem;
  width: 3rem;
  margin: 0.5rem;
}

.paragraph {
  font-size: 1.7rem;
  line-height: 2.5rem;
  text-align: justify;
  margin: 1rem 0;
  letter-spacing: 0.7px;

  &:nth-child(1) {
    margin-top: 0;
  }
}

.scroll-btn a {
  //   position: absolute;
  //   bottom: 20px;
  //   left: 50%;
  z-index: 2;
  display: inline-block;
  //   -webkit-transform: translate(0, -50%);
  //   transform: translate(0, -50%);
  color: #fff;
  font: normal 400 20px/1 'Josefin Sans', sans-serif;
  letter-spacing: 0.1em;
  text-decoration: none;
  cursor: default;
  transition: opacity 0.3s;
}

#scroll-down a {
  margin: 4rem 0 0;
  display: block;
  position: relative;
}

#scroll-down a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid $dark-pink;
  border-radius: 50px;
  box-sizing: border-box;
  //   transform: translateX(50%);
}

#scroll-down a span::before {
  position: absolute;
  top: 10px;
  left: 50%;
  content: '';
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: $light-pink;
  border-radius: 100%;
  -webkit-animation: sdb10 2s infinite;
  animation: sdb10 2s infinite;
  box-sizing: border-box;
}

@-webkit-keyframes sdb10 {
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb10 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.img {
  width: 100%;
  margin: 1rem auto;
}

.bottom-row {
  font-size: 1.4rem;
  padding: 2rem 0 7rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__item {
    cursor: pointer;
    transition: 0.2s ease-in;

    &:hover {
      color: rgb(95, 95, 95);
    }

    & i {
      margin: 0 1.5rem;
    }

    &:nth-child(2) i {
      margin: 0 1.5rem 0 0 !important;
    }
  }
}
</style>
