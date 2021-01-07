<template>
  <div class="pain-points">
    <div class="container">
      <div class="row">
        <div class="col">
          <h4 class="pain-point-h4">
            Pain Point 1: Where Am I Supposed To Look On This Dashboard?
          </h4>

          <img
            class="hr"
            src="@/static/img/louboutin-app/soulier-hr.png"
            alt="hr"
          />

          <p class="paragraph">
            Ok, what’s happening here? Only 2 choices with only one
            supposed-to-be-related to shopping, which is actually the homepage?
            No shoes categories which is the main subject of the brand? Besides,
            the menu disappears from the moment you scroll, so you have no other
            choice than scrolling back to the top for any other action.
          </p>

          <p class="paragraph">
            <span class="outcome stronger">Design solution:</span> Let’s do
            something easy to use, shall we? Louboutin’s desktop website is full
            of categories (beauty, men, women, accessories etc) and pretty well
            organised. Let’s keep this in our app. The navigation is clear and
            items are suggested to complete your look when you are wandering on
            the app. The navbar also let the user go through the other
            categories such as locations stores, favorites items, cart and
            personal info.
          </p>
        </div>
      </div>
    </div>

    <div class="white-background">
      <div class="container">
        <div class="row">
          <img
            src="@/static/img/louboutin-app/pain-points/pp-1.png"
            alt="pp1"
            class="pp1"
          />
          <img
            src="@/static/img/louboutin-app/pain-points/solution-pp-1.png"
            alt="solution-pp1"
            class="pp1-solution"
          />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <h4 class="pain-point-h4">
            PAIN POINT 2: LET ME SPEND MY MONEY & SAVE ITEMS FOR LATER
          </h4>

          <img
            class="hr"
            src="@/static/img/louboutin-app/soulier-hr.png"
            alt="hr"
          />

          <p class="paragraph">
            Let’s pretend we haven’t seen there is no possibilities to check any
            items and let’s focus on the solution.
          </p>

          <p class="paragraph">
            <span class="outcome stronger">Design solution:</span> Users can
            favorite any item, anytime, when he see it on his screen. When he
            selects a product, this one appears in big, with an animation. From
            this overlay, he can choose several option: put it in favorite,
            select the size if required, check for more information, add to
            cart, see more pictures and go back to the previous page.
          </p>
        </div>
      </div>
    </div>

    <div class="white-background">
      <div class="container">
        <div class="row">
          <div class="col">
            <img
              src="@/static/img/louboutin-app/pain-points/product-overlay.png"
              alt="overlay"
            />
          </div>
          <div class="col">
            <img
              src="@/static/img/louboutin-app/pain-points/product-basket.png"
              alt="basket"
            />
          </div>
          <div class="col">
            <img
              src="@/static/img/louboutin-app/pain-points/favourites.png"
              alt="favourites"
            />
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
.pain-points {
  & h4 {
    text-align: center;
  }

  & .hr {
    width: 100%;
    margin: 0 auto 1rem;
  }

  & .white-background {
    margin: 2rem auto;
    padding: 2rem;
    background-image: url('../../../static/img/louboutin-app/background-white.jpg');

    & img {
      width: 90%;
      display: block;
      margin: 1rem auto;
    }

    & .pp1 {
      width: 70%;
      margin: 1rem auto;
    }

    & .pp1-solution {
      width: 100%;
      margin: 1rem auto;
    }
  }
}
</style>
