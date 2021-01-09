<template>
  <div class="black-background">
    <div class="icons container">
      <div class="row justify-content-between align-items-start">
        <div class="col-sm-12 col-lg-6">
          <div class="daily-icons">
            <h4>What I use on regular basis</h4>
            <div class="row">
              <img
                class="icon"
                src="@/static/img/icons/softwares/sketch.svg"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/softwares/xd.svg"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/softwares/indesign.svg"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/softwares/illustrator.svg"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/softwares/photoshop.svg"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/softwares/premiere.svg"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/softwares/lightroom.svg"
                alt="icon"
              />
            </div>

            <h4>(Very) Rarely I code</h4>
            <div class="row justify-content-start">
              <img
                class="icon"
                src="@/static/img/icons/languages/html.svg"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/languages/css.svg"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/languages/javascript.svg"
                alt="icon"
              />
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
        <div class="col-sm-12 col-lg-6">
          <div class="icons__social-medias">
            <h4>Visit my Linkedin profile</h4>
            <div class="row justify-content-center">
              <a
                href="https://www.linkedin.com/in/laura-sibille/"
                target="_blank"
              >
                <img
                  class="icon"
                  src="@/static/img/icons/social-medias/linkedin.svg"
                  alt="linkedin"
                />
              </a>
            </div>
            <h4>& my Social media</h4>
            <div class="row justify-content-center">
              <a href="https://www.behance.net/laurasibil2c3c" target="_blank">
                <img
                  class="icon"
                  src="@/static/img/icons/social-medias/behance.svg"
                  alt="behance"
                />
              </a>
              <a href="https://dribbble.com/LauraSibille" target="_blank">
                <img
                  class="icon"
                  src="@/static/img/icons/social-medias/dribbble.svg"
                  alt="dribbble"
                />
              </a>
              <a href="https://www.instagram.com/laurasibille/" target="_blank">
                <img
                  class="icon"
                  src="@/static/img/icons/social-medias/instagram.svg"
                  alt="dribbble"
                />
              </a>
            </div>
            <a
              href="/Laura SIBILLE - Resume.pdf"
              targe="_blank"
              class="btn download"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.black-background {
  background-color: $dark-black;

  @media (prefers-color-scheme: light) {
    background-color: $dark-blue;
    color: $light-white;
  }
}

.icons {
  padding-top: 5rem;
  padding-bottom: 4rem;

  @media only screen and (max-width: $bp-small) {
    text-align: center;

    .row {
      justify-content: center !important;
    }

    .daily-icons {
      margin: 0 auto 4rem;
    }
  }

  & h4:first-child {
    margin-top: 0;
  }

  & h4:nth-child(2) {
    margin-top: 0;
  }

  & .icon {
    width: 3rem;
    height: 3rem;
    margin: 1rem 0.5rem 3rem;
  }

  & .daily-icons {
    & .icon {
      &:first-child {
        margin-left: 2rem;
      }
    }
  }

  & p {
    padding-left: 1rem;

    @media only screen and (max-width: $bp-small) {
      text-align: center;
    }
  }

  &__social-medias {
    text-align: center;

    & img {
      cursor: pointer;
    }

    & .btn {
      @media only screen and (max-width: $bp-large) {
        width: 90%;
      }
    }

    & .download {
      margin-top: 2rem;
      display: inline-block;
    }
  }
}
</style>
