<template>
  <div class="job-stories">
    <div class="container">
      <div class="page-content">
        <h3 class="page-content__title">Job Stories</h3>

        <div class="row job-stories">
          <p class="paragraph">
            Wanting to - once again - emphasise context, causation, and
            motivations, over assumption sprinkled with subjectivity, I chose to
            create Job Stories, instead of User Stories.
          </p>
          <p class="paragraph">
            The latter are therefore based on the study of interviews conducted
            previously.
          </p>
        </div>
      </div>
    </div>

    <div class="row job-story blue-background">
      <div class="col-8">
        <p class="paragraph">
          "<span class="situation"
            >When I go to the restaurant with friends using Revolut</span
          >, there is always someone who pays for everybody.
          <span class="motivation">I want to refund this person</span>,
          <span class="outcome">so I can make a quick transfert</span> That’s
          awesome!"
        </p>
        <p class="paragraph">
          "<span class="situation">When I have to make a payment</span> and
          realise I don’t have money anymore on my Revolut account,
          <span class="outcome">I make a top-up</span> to
          <span class="motivation">refill it in a few seconds!</span> This is
          very convenient when you are abroad."
        </p>
        <p class="paragraph">
          "<span class="situation">When I travel</span>, I
          <span class="motivation"
            >don’t want to pay fees for changing currencies</span
          >. Who still pays for that in 2020?
          <span class="outcome"
            >So I create a new account for the currency</span
          >
          of the country I am travelling in."
        </p>
      </div>
      <div class="col-4">
        <span class="job-story__label job-story__label--situation"
          >Situation</span
        >
        <span class="job-story__label job-story__label--motivation"
          >Motivation</span
        >
        <span class="job-story__label job-story__label--outcome">Outcome</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
html.light .job-story {
  color: $light-white;
}

.job-story {
  & .paragraph {
    margin: 3rem 0;
    text-align: center;

    &:nth-child(1) {
      margin-top: 0;
    }
  }

  &__label {
    display: block;
    margin: 3rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    &--situation {
      color: $light-pink;
    }

    &--motivation {
      color: #948fe2;
    }

    &--outcome {
      color: #97da7b;
    }
  }
}

.situation {
  color: $light-pink;
}

.motivation {
  color: #948fe2;
}

.outcome {
  color: #97da7b;
}
</style>
