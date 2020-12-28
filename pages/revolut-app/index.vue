<template>
  <div>
    <div class="page-background"></div>

    <div class="container">
      <div class="page-description">
        <small class="case-study-subtitle">Case Study</small>
        <div class="row">
          <div class="overview col">
            <h1 class="main-title">
              UX Research & Design - Revolut App Design
            </h1>
            <h2 class="subtitle">Year</h2>
            <small class="subinfo">2020</small>
            <h2 class="subtitle">Softwares</h2>
            <div class="icons">
              <img class="icon" src="@/static/img/icons/xd.png" alt="icon" />
              <img
                class="icon"
                src="@/static/img/icons/illustrator.png"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/rotaro.png"
                alt="icon"
              />
            </div>
          </div>
          <div class="description col">
            <p class="paragraph">
              "THE NEW REVOLUT UPDATE S**KS" This is what I have been hearing
              all 2020 long. Dull colours, messy information, Revolut team
              managed to transform their initial great app in a nightmare for
              their user.
            </p>
            <p class="paragraph">
              With this UX research, I’ll try to see what’s wrong with the main
              features and suggest a new design. The goal being "<strong
                >Don’t let me think</strong
              >"".
            </p>
            <p class="paragraph">
              I’ll make it short, because too much text is annoying, but I’ll be
              glad to spend one hour on zoom to cover all the missing points of
              this study.
            </p>
            <p class="paragraph">
              Regarding the method, I wanted to be as close as possible to user
              needs with a <strong>human-centred</strong> approach and I used
              <strong>Lean UX</strong> design thinking. For user research, I
              relied on Google statistics showing that 85% of major usability
              problems can be solved with feedback from just 5 people.
              <strong>Guerrilla</strong> usability testing is therefore perfect
              for this case study!
            </p>
          </div>
          <section id="scroll-down" class="scroll-btn col-12">
            <a><span></span></a>
          </section>
        </div>
      </div>

      <div class="page-content">
        <h3 class="page-content__title">Persons</h3>

        <div class="row introduction">
          <p class="paragraph">
            To start, I interviewed real Revolut users, finding the personas to
            be often biased: they are a mixture of assumptions and presumptions
            from our own interpretation, which are often not objective.
          </p>
          <p class="paragraph">
            I interviewed 8 people with different user profiles: They almost all
            live in different countries, some travel a lot, others not, but all
            shared their experience with the current app, why they had chosen
            this neo-bank and what are the functionalities that seem essential
            to them as well as those which are useless.
          </p>
        </div>

        <div class="row persona">
          <div class="persona__profile col-8">
            <table>
              <tr>
                <td>
                  <h4 class="persona__h4">This is Alex</h4>
                  <img
                    src="@/static/img/revolut-app/persona.png"
                    alt="persona"
                  />
                </td>
                <td>
                  <h4 class="persona__h4">Behavior</h4>
                  <ul class="persona__profile__list">
                    <li>Mainly works from home</li>
                    <li>Manage his finance from his phone</li>
                    <li>Is in charge of domestics spendings</li>
                    <li>Is interested in trading</li>
                    <li>Save money for holidays</li>
                    <li>Lives in Bulgaria with a French bank account</li>
                    <li>Loves to travel abroad</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 class="persona__h4">Demographics</h4>
                  <ul class="persona__profile__list">
                    <li><strong>Age:</strong> 24</li>
                    <li><strong>Location:</strong> Sofia, Bulgaria</li>
                    <li><strong>Occupation:</strong> Web Developer</li>
                  </ul>
                </td>
                <td>
                  <h4 class="persona__h4">Needs & Goals</h4>
                  <ul class="persona__profile__list">
                    <li>Wants to change euro in lev for free and quick</li>
                    <li>Wants to start trading</li>
                    <li>Wants to manage his online bank account easily</li>
                    <li>Wants to spare money</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
          <div class="persona__pros-cons col-4">
            <small
              >Most important features according to the users interviewed</small
            >
            <ul class="persona__list">
              <li class="persona__item">
                <img src="@/static/img/icons/yes.png" alt="yes" />
                Change currency
              </li>
              <li class="persona__item">
                <img src="@/static/img/icons/yes.png" alt="yes" /> Instant
                transfers
              </li>
              <li class="persona__item">
                <img src="@/static/img/icons/yes.png" alt="yes" /> Customer
                service
              </li>
            </ul>
            <ul class="persona__list">
              <li class="persona__item">
                <img src="@/static/img/icons/no.png" alt="no" />
                Trading
              </li>
              <li class="persona__item">
                <img src="@/static/img/icons/no.png" alt="no" /> Gifts &
                Donations
              </li>
              <li class="persona__item">
                <img src="@/static/img/icons/no.png" alt="no" /> Junior accounts
              </li>
              <li class="persona__item">
                <img src="@/static/img/icons/no.png" alt="no" /> Budget creation
              </li>
            </ul>
          </div>
        </div>
      </div>

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

    <div class="row job-story">
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

<style lang="scss" scoped>
.page-background {
  background-image: url('../../static/img/revolut-app/background.jpeg') !important;
}

.page-content {
  &__title {
    font-family: 'Baskerville', sans-serif;
    font-size: 2.4rem;
    letter-spacing: 1px;
    text-align: left;
    margin: 2rem 0 2rem 0;
    align-self: start;
    text-transform: uppercase;
    font-weight: 400;
  }
}

.persona {
  margin: 10rem 0;
  font-size: 1.7rem;
  align-items: center;
  justify-content: space-between;

  &__profile {
    & img {
      width: 85%;
      margin: 0 auto;
      display: block;
    }

    &__list li {
      margin: 1rem;
    }

    table {
      border-collapse: collapse;
      margin: 0 auto;
    }

    table tr {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: stretch;
      width: 65rem;
    }

    table td {
      padding: 1rem;
      border: 2px solid $light-pink;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;
      width: 65rem;
    }
    table tr:first-child td {
      border-top: 0;
    }
    table tr td:first-child {
      border-left: 0;
    }
    table tr:last-child td {
      border-bottom: 0;
    }
    table tr td:last-child {
      border-right: 0;
    }
  }

  & h4 {
    color: $light-pink;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin: 2rem 0;
  }

  &__pros-cons {
    & small {
      margin: 2rem 0;
      font-size: 1.5rem;
      text-transform: uppercase;
      display: block;
      letter-spacing: 1px;
    }
  }

  &__list {
    list-style-type: none;
    margin: 4rem 0;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem 0;

    & img {
      margin-right: 1rem;
    }
  }
}

.job-stories {
}

.job-story {
  background-color: $light-blue;
  margin: 3rem 0;
  padding: 5rem 15rem;

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
