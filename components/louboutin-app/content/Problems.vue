<template>
  <div class="problem">
    <div class="row align-items-center">
      <div class="col-12 problem__video">
        <div class="problem__video--content">
          <small
            >Video screen of the <br />
            original louboutin website</small
          >
          <video
            class="problem__mp4"
            src="@/static/img/louboutin-app/original mobile louboutin.MP4"
            type="video/mp4"
            controls
          ></video>
        </div>
      </div>
      <div class="col-12 problem__explanation">
        <div class="problem__explanation--content">
          <h4>DEFINE PROBLEM & ANALYSE</h4>
          <img
            class="hr"
            src="@/static/img/louboutin-app/soulier-hr.png"
            alt="hr"
          />
          <p class="paragraph">
            Here are the main pain points notified during this survey which
            honestly, was almost pointless from the start as it was impossible
            to select any item.
          </p>
          <ul class="problem__explanation__list">
            <li class="problem__explanation__item">
              ❌ The brand doesn’t have an app!
            </li>
            <li class="problem__explanation__item">
              ❌ Charging a page is super slow, even in an environment with
              excellent internet connection
            </li>
            <li class="problem__explanation__item">
              ❌ The menu shows only "Gift" which is the homepage and
              "LouboutinWorld" related to the brand news
            </li>
            <li class="problem__explanation__item">
              ❌ All items presented leads to non existing pages
            </li>
            <li class="problem__explanation__item">
              ❌ I need to scroll up to the top if I want to access the menu
            </li>
            <li class="problem__explanation__item">
              ❌ The website is not secure!!
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.problem {
  height: 600px;

  @media only screen and (max-width: $bp-medium) {
    height: auto;
  }
  position: relative;
  &__video {
    background-image: url('../../../static/img/louboutin-app/background-gold.jpg');
    background-size: cover;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    clip-path: polygon(0 0, 38% 0, 57% 100%, 0 100%);
    height: 95%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    padding-top: 10rem;
    padding-left: 10rem;

    @media only screen and (max-width: $bp-medium) {
      position: relative;
      transform: none;
      top: auto;
      left: auto;
      padding: 4rem;
      padding-bottom: 15rem;
      margin-bottom: -10rem;
      clip-path: polygon(0 0, 100% 0%, 100% 80%, 0 90%);
    }

    @media only screen and (max-width: $bp-small) {
      margin-bottom: -16rem;
    }

    &--content {
      @media only screen and (max-width: $bp-medium) {
        width: 100%;
        margin: auto;
        max-width: 720px;
      }
    }

    & small {
      color: $light-white;
      margin-bottom: 1rem;
      display: block;
      font-size: 1.8rem;
      font-weight: bold;
    }
  }
  &__mp4 {
    width: 30rem;
    height: 70%;
  }

  &__explanation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    background-color: $light-white;
    height: 100%;
    z-index: 9;
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 30% 100%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    text-align: center;
    padding-top: 5rem;
    padding-left: 10rem;
    color: $dark-black;

    @media only screen and (max-width: $bp-medium) {
      clip-path: none;
      position: relative;
      transform: none;
      top: auto;
      right: auto;
      padding-left: 0;
    }

    & h4 {
      font-size: 1.6rem;
      @media only screen and (max-width: $bp-medium) {
        padding-top: 5rem;
      }
    }

    &--content {
      width: 50%;
      margin-left: auto;
      margin-right: 2rem;

      @media only screen and (max-width: $bp-medium) {
        width: 100%;
        margin: auto;
        max-width: 720px;
      }

      @media only screen and (max-width: $bp-small) {
        width: 80%;
        margin: auto;
      }
    }

    & .hr {
      width: 100%;
      margin: 1rem auto;
    }

    &__list {
      list-style-type: none;
      margin: 4rem 0;
      text-align: center;
      padding-left: 5rem;
    }

    &__item {
      margin: 1rem 0;
      text-align: left;

      & img {
        margin-right: 1rem;
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
</style>
