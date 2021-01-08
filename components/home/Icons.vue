<template>
  <div class="home__icons container">
    <div class="row justify-content-center align-items-start">
      <div class="col-sm-12 col-lg-5">
        <div class="daily-icons">
          <h4>What I use on regular basis</h4>
          <div class="row">
            <img class="icon" src="@/static/img/icons/sketch.png" alt="icon" />
            <img class="icon" src="@/static/img/icons/xd.png" alt="icon" />
            <img class="icon" src="@/static/img/icons/in.svg" alt="icon" />
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
          <h4>(Very) Rarely I code</h4>
          <div class="row justify-content-start">
            <img class="icon" src="@/static/img/icons/html.svg" alt="icon" />
            <img class="icon" src="@/static/img/icons/css.svg" alt="icon" />
            <img
              class="icon"
              src="@/static/img/icons/javascript.svg"
              alt="icon"
            />
          </div>
          <h4>I would like to learn</h4>
          <div class="row justify-content-start">
            <img
              class="icon"
              src="@/static/img/icons/after-effects.svg"
              alt="icon"
            />
            <img
              class="icon"
              src="@/static/img/icons/rhinoceros.svg"
              alt="icon"
            />
            <img class="icon" src="@/static/img/icons/dn.svg" alt="icon" />
          </div>
          <h4>5 YEARS OF EXPERIENCE IN THE DESIGN GAME</h4>
          <p class="paragraph">
            2 years as an eyewear designer (<a
              href="/Laura SIBILLE - Portfolio Eyewear.pdf"
              class="link"
              target="_blank"
              >Industrial design</a
            >)
          </p>
          <p class="paragraph">3 years in the web design</p>
        </div>
      </div>
      <div class="col-sm-12 col-lg-4">
        <div class="card">
          <h4>See my Linkedin profile</h4>
          <div class="row justify-content-center">
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
          <h4>& my Social media</h4>
          <div class="row justify-content-center">
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
          <a
            class="download btn"
            href="/Laura SIBILLE - Resume.pdf"
            target="_blank"
          >
            Download My Resume</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home {
  &__icons {
    padding: 4rem 0;

    @media only screen and (max-width: $bp-small) {
      text-align: center;

      .row {
        justify-content: center !important;
      }

      .daily-icons {
        margin: 0 auto 4rem;
      }
    }

    & h4 {
      font-family: 'Gill Sans', sans-serif;
      font-size: 1.8rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-weight: lighter;
      margin-top: 1rem;
      margin-bottom: 1rem;

      &:first-child {
        margin-top: 0;
      }
    }

    & .daily-icons {
      & .icon {
        &:first-child {
          margin-left: 2rem;
        }
      }

      & .link {
        text-decoration: none;
        color: $light-white;
        transition: 0.3s ease-in;

        @media (prefers-color-scheme: light) {
          background-color: $dark-blue;
        }

        &:hover {
          color: $dark-pink;
        }
      }
    }

    & .icon {
      width: 3rem;
      height: 3rem;
      margin: 0 0.5rem 2rem;
    }

    & p {
      padding-left: 1rem;
      font-size: 1.6rem;

      @media only screen and (max-width: $bp-small) {
        text-align: center;
      }
    }

    & .card {
      text-align: center;

      & img {
        cursor: pointer;
      }

      & a.download {
        font-family: 'Baskerville', sans-serif;
        font-size: 1.8rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: lighter;
        margin: 3rem auto;
        display: block;
        text-decoration: none;
        padding: 2rem 0;

        color: $light-white;

        @media only screen and (max-width: $bp-large) {
          width: 50%;
        }
      }
    }
  }
}
</style>
